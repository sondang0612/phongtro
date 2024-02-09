import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Price } from 'src/types';
import queryKeys from './queryKey';

const fetchPriceByCode = async (priceCode?: string) => {
  const response = await axiosInstance.get(`/api/v1/price/${priceCode}`);
  return response?.data.response;
};

const usePriceByCode = ({ priceCode }: { priceCode?: string }) => {
  return useQuery<Price>({
    queryKey: [queryKeys.usePriceByCode, priceCode],
    queryFn: () => fetchPriceByCode(priceCode),
    enabled: !!priceCode,
  });
};

export default usePriceByCode;
