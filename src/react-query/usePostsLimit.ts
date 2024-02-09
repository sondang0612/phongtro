import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Post } from 'src/types';
import queryKeys from './queryKey';

const fetchPostsLimit = async (page: number, query?: object) => {
  const response = await axiosInstance.get('/api/v1/post/limit', {
    params: { page, ...query },
  });
  return {
    data: response.data.response.rows,
    totalPages: response.data.totalPages,
  };
};

const usePostsLimit = ({ page, query }: { page: number; query?: object }) => {
  return useQuery<{ data: Post[]; totalPages: number }>({
    queryKey: [queryKeys.usePostsLimit, { page, ...query }],
    queryFn: () => fetchPostsLimit(page, query),
  });
};

export default usePostsLimit;
