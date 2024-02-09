import React from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Modal, SearchItem } from 'src/components';
import useAreas from 'src/react-query/useAreas';
import useCategories from 'src/react-query/useCategories';
import usePrices from 'src/react-query/usePrices';
import useProvinces from 'src/react-query/useProvinces';
import { Category, Price, Province } from 'src/types';
import icons from 'src/utils/icons';
import removeNullFromObject from 'src/utils/removeNullFromObject';
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;
const Search = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const { data: provinces } = useProvinces();
  const { data: categories } = useCategories();
  const { data: prices } = usePrices();
  const { data: areas } = useAreas();

  const [modalContent, setModalContent] = React.useState<{
    title: string;
    data?: any[];
    onItemPress?: (item: any) => void;
    initialItem?: any;
  }>({
    title: '',
    data: [],
  });
  const [params] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState<
    Category | undefined
  >(categories ? categories[0] : undefined);

  const [selectedProvince, setSelectedProvince] = React.useState<
    Province | undefined
  >(undefined);

  const [selectedPrice, setSelectedPrice] = React.useState<Price | undefined>(
    undefined
  );

  const [selectedArea, setSelectedArea] = React.useState<Price | undefined>(
    undefined
  );
  const [itemType, setItemType] = React.useState<'default' | 'card'>('default');
  const navigate = useNavigate();
  const handleShowModal = (
    type: 'category' | 'province' | 'price' | 'area'
  ) => {
    type === 'price' || type === 'area'
      ? setItemType('card')
      : setItemType('default');
    if (type === 'category') {
      setModalContent({
        title: 'CHỌN LOẠI BẤT ĐỘNG SẢN',
        data: categories,
        initialItem: selectedCategory,
        onItemPress: (item: any) => {
          setSelectedCategory(item);
        },
      });
    }

    if (type === 'province') {
      setModalContent({
        title: 'CHỌN TỈNH THÀNH',
        initialItem: selectedProvince,
        data: provinces,
        onItemPress: (item: any) => {
          setSelectedProvince(item);
        },
      });
    }

    if (type === 'price') {
      setModalContent({
        title: 'CHỌN GIÁ',
        initialItem: selectedPrice,
        data: prices,
        onItemPress: (item: any) => {
          setSelectedPrice(item);
        },
      });
    }

    if (type === 'area') {
      setModalContent({
        title: 'CHỌN DIỆN TÍCH',
        initialItem: selectedArea,
        data: areas,
        onItemPress: (item: any) => {
          setSelectedArea(item);
        },
      });
    }

    setIsShowModal(true);
  };

  const onSearchPress = () => {
    navigate({
      pathname: `/${selectedCategory?.label}`,
      search: createSearchParams(
        removeNullFromObject({
          provinceCode: selectedProvince?.code,
          areaCode: selectedArea?.code,
          priceCode: selectedPrice?.code,
          categoryCode: selectedCategory?.code,
        })
      ).toString(),
    });
  };

  React.useEffect(() => {
    const initialLoad = () => {
      const provinceCode = params.get('provinceCode');
      const areaCode = params.get('areaCode');
      const priceCode = params.get('priceCode');
      const categoryCode = params.get('categoryCode');
      if (provinces && provinceCode) {
        setSelectedProvince(
          provinces.filter((item) => item.code === provinceCode)[0]
        );
      }

      if (areaCode && areas) {
        setSelectedArea(areas.filter((item) => item.code === areaCode)[0]);
      }

      if (priceCode && prices) {
        setSelectedPrice(prices.filter((item) => item.code === priceCode)[0]);
      }
      if (categoryCode && categories) {
        setSelectedCategory(
          categories.filter((item) => item.code === categoryCode)[0]
        );
      }
    };
    initialLoad();
  }, [params, provinces, areas, prices, categories]);

  return (
    <>
      <div className="p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex justify-around items-center gap-2">
        <span onClick={() => handleShowModal('category')} className="flex-1">
          <SearchItem
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={
              selectedCategory
                ? selectedCategory.value
                : categories
                ? categories[0].value
                : ''
            }
            bold
          />
        </span>
        <span onClick={() => handleShowModal('province')} className="flex-1">
          <SearchItem
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            IconBefore={<HiOutlineLocationMarker color="rgb(156,163,175)" />}
            text={selectedProvince ? selectedProvince.value : 'Toàn quốc'}
            bold={!!selectedProvince}
          />
        </span>
        <span onClick={() => handleShowModal('price')} className="flex-1">
          <SearchItem
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            IconBefore={<TbReportMoney color="rgb(156,163,175)" />}
            text={selectedPrice ? selectedPrice.value : 'Chọn giá'}
            bold={!!selectedPrice}
          />
        </span>
        <span onClick={() => handleShowModal('area')} className="flex-1">
          <SearchItem
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            IconBefore={<RiCrop2Line color="rgb(156,163,175)" />}
            text={selectedArea ? selectedArea.value : 'Chọn diện tích'}
            bold={!!selectedArea}
          />
        </span>
        <button
          type="button"
          onClick={onSearchPress}
          className="outline-none py-2 px-4 flex-1 bg-secondary1 text-sm rounded-md text-white font-medium flex items-center justify-center gap-2"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          modalContent={modalContent}
          itemType={itemType}
        />
      )}
    </>
  );
};

export default Search;
