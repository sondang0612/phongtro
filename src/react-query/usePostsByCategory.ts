import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Post } from 'src/types';
import queryKeys from './queryKey';

const fetchPostsByCategory = async (categoryCode?: string) => {
  const response = await axiosInstance.get(
    `/api/v1/post/category/${categoryCode}`
  );
  return response.data.response.rows;
};

const usePostsByCategory = ({ categoryCode }: { categoryCode?: string }) => {
  return useQuery<Post[]>({
    queryKey: [queryKeys.usePostsByCategory, { categoryCode }],
    queryFn: () => fetchPostsByCategory(categoryCode),
    enabled: !!categoryCode,
  });
};

export default usePostsByCategory;
