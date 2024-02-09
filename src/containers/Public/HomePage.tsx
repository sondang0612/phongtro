import {
  ItemSlideBar,
  ListPosts,
  Provinces,
  NewestPosts,
} from 'src/components';
import { text } from 'src/utils/constants';
import { Search } from '.';
import useCategories from 'src/react-query/useCategories';
import usePrices from 'src/react-query/usePrices';
import useAreas from 'src/react-query/useAreas';
import HeaderText from './HeaderText';

const HomePage = () => {
  const { data: categories } = useCategories();
  const { data: prices } = usePrices();
  const { data: areas } = useAreas();
  return (
    <div className="w-full flex flex-col gap-3">
      <Search />
      <div className="items-center justify-center flex flex-col">
        {!categories || categories.length === 0 ? (
          <div className="text-[21px] font-bold py-[50px] w-1/2 text-center">
            Vì xài gói free nên cần thời gian khoảng 1p để khởi động server cho
            request đầu tiên xin thông cảm!!!
          </div>
        ) : (
          <>
            <HeaderText />
            <p className="text-[14.5px] text-[#65676b]">
              {text.HOME_DESCRIPTION}
            </p>
            <Provinces />
          </>
        )}
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <ListPosts />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSlideBar content={categories} title="Danh mục cho thuê" />
          <ItemSlideBar
            content={prices}
            title="Xem theo giá"
            type="priceCode"
          />
          <ItemSlideBar
            content={areas}
            title="Xem theo diện tích"
            type="areaCode"
          />
          <NewestPosts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
