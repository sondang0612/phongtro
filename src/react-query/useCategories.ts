import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Category } from 'src/types';
import queryKeys from './queryKey';

const fetchCategories = async () => {
  const response = await axiosInstance.get('/api/v1/category/all');
  return response.data.response;
};

const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: [queryKeys.useCategories],
    queryFn: () => fetchCategories(),
  });
};

export default useCategories;
