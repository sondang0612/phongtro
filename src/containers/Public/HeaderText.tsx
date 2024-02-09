import { useSearchParams } from 'react-router-dom';
import useAreaByCode from 'src/react-query/useAreaByCode';
import useCategoryByCode from 'src/react-query/useCategoryByCode';
import usePriceByCode from 'src/react-query/usePriceByCode';
import useProvinceByCode from 'src/react-query/useProvinceByCode';
import { text } from 'src/utils/constants';

const HeaderText = () => {
  const [params] = useSearchParams();
  const provinceCode = params.get('provinceCode') || undefined;
  const categoryCode = params.get('categoryCode') || undefined;
  const areaCode = params.get('areaCode') || undefined;
  const priceCode = params.get('priceCode') || undefined;

  const { data: province } = useProvinceByCode({ provinceCode });
  const { data: area } = useAreaByCode({ areaCode });
  const { data: category } = useCategoryByCode({
    categoryCode,
  });
  const { data: price } = usePriceByCode({
    priceCode,
  });
  const getText = () => {
    let arrTexts = [];
    if (category) arrTexts.push(`${category.value}`);
    if (province) arrTexts.push(`tại khu vực ${province.value}`);
    if (area) arrTexts.push(`có diện tích ${area.value}`);
    if (price) arrTexts.push(`và giá ${price.value}`);

    return arrTexts.join(' ');
  };

  return (
    <h1 className="text-[28px] font-bold">
      {getText().length === 0 ? text.HOME_TITLE : getText()}
    </h1>
  );
};

export default HeaderText;
