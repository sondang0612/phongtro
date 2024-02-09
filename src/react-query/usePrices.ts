import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Price } from 'src/types';
import queryKeys from './queryKey';

const fetchPrices = async () => {
  const response = await axiosInstance.get('/api/v1/price/all');
  return response?.data.response;
};

const usePrices = () => {
  return useQuery<Price[]>({
    queryKey: [queryKeys.usePrices],
    queryFn: fetchPrices,
  });
};

export default usePrices;
