import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Category } from 'src/types';
import queryKeys from './queryKey';

const fetchCategoryByCode = async (categoryCode?: string) => {
  const response = await axiosInstance.get(`/api/v1/category/${categoryCode}`);
  return response?.data.response;
};

const useCategoryByCode = ({ categoryCode }: { categoryCode?: string }) => {
  return useQuery<Category>({
    queryKey: [queryKeys.useCategoryByCode, categoryCode],
    queryFn: () => fetchCategoryByCode(categoryCode),
    enabled: !!categoryCode,
  });
};

export default useCategoryByCode;
