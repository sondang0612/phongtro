import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Post } from 'src/types';
import queryKeys from './queryKey';

const fetchNewestPosts = async () => {
  const response = await axiosInstance.get('/api/v1/post/newest-posts');
  return response?.data.response.rows;
};

const useNewestPosts = () => {
  return useQuery<Post[]>({
    queryKey: [queryKeys.useNewestPosts],
    queryFn: fetchNewestPosts,
  });
};

export default useNewestPosts;
