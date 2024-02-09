import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Post } from 'src/types';
import queryKeys from './queryKey';

const fetchPosts = async () => {
  const response = await axiosInstance.get('/api/v1/post/all');
  return response.data.response;
};

const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: [queryKeys.usePosts],
    queryFn: fetchPosts,
  });
};

export default usePosts;
