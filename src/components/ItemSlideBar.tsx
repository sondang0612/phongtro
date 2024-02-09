import React from 'react';
import {
  Link,
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { formatVietnameseToString } from 'src/utils/formatVietnameseToString';
import icons from 'src/utils/icons';
import removeNullFromObject from 'src/utils/removeNullFromObject';
const { GrNext } = icons;
type Props = {
  content?: any[];
  title: string;
  type?: 'priceCode' | 'areaCode';
};
const ItemSlideBar = (props: Props) => {
  const { content, title, type } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const areaCode = params.get('areaCode');
  const priceCode = params.get('priceCode');
  const formatContent = () => {
    if (!content) return undefined;
    const data = [];
    const temp = [...content];
    while (temp.length) data.push(temp.splice(0, 2));
    return data;
  };

  const handleClick = (itemCode: string) => {
    if (!type) return undefined;
    const searchParams = removeNullFromObject({
      areaCode,
      categoryCode: params.get('categoryCode'),
      priceCode,
    });
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        page: '0',
        ...searchParams,
        [type]: itemCode,
      }).toString(),
    });
  };

  const handleDeleteFilter = () => {
    if (!type) return undefined;
    const searchParams = {
      areaCode,
      categoryCode: params.get('categoryCode'),
      priceCode,
    };

    if (type === 'areaCode') {
      searchParams.areaCode = null;
    } else if (type === 'priceCode') {
      searchParams.priceCode = null;
    }
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        page: '0',
        ...removeNullFromObject(searchParams),
      }).toString(),
    });
  };

  return (
    <div className="rounded-md bg-white w-full p-[20px]">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {type && (
          <span
            className="text-[14px] text-red-500 underline cursor-pointer"
            onClick={handleDeleteFilter}
          >
            Xóa Filter
          </span>
        )}
      </div>
      {type ? (
        <div className="flex gap-1 mt-[10px] flex-col">
          {formatContent()?.map((item, index) => (
            <div
              className="flex flex-row items-center border-b-[1px] border-dashed"
              key={index}
            >
              <div
                onClick={() => handleClick(item[0].code)}
                className="flex items-center gap-[8px] py-[5px] w-1/2 justify-start"
              >
                <GrNext size={10} color="#BDBDBD" />
                <p
                  className={`text-[14px] hover:text-[#f60] cursor-pointer ${
                    areaCode === item[0].code || priceCode === item[0].code
                      ? 'text-[#f60]'
                      : 'text-[#333]'
                  }`}
                >
                  {item[0].value}
                </p>
              </div>
              <div
                onClick={() => handleClick(item[1].code)}
                className="flex items-center gap-[8px] py-[5px] w-1/2 justify-start"
              >
                <GrNext size={10} color="#BDBDBD" />
                <p
                  className={`text-[14px] hover:text-[#f60] cursor-pointer ${
                    areaCode === item[1].code || priceCode === item[1].code
                      ? 'text-[#f60]'
                      : 'text-[#333]'
                  }`}
                >
                  {item[1].value}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-1 mt-[10px] flex-col">
          {content?.map((item, index) => (
            <Link
              to={`/${formatVietnameseToString(
                item.value
              )}?page=0&categoryCode=${item.code}`}
              key={index}
              className="flex items-center gap-[8px] border-b-[1px] border-dashed py-[5px]"
            >
              <GrNext size={10} color="#BDBDBD" />
              <p className="text-[14px] text-[#333] hover:text-[#f60] cursor-pointer">
                {item.value}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(ItemSlideBar);
