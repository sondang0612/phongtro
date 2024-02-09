import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Post } from 'src/types';
import queryKeys from './queryKey';

const fetchMyPosts = async () => {
  const response = await axiosInstance.get('/api/v1/post/my-posts');
  return response?.data.response.rows;
};

const useMyPosts = () => {
  return useQuery<Post[]>({
    queryKey: [queryKeys.useMyPosts],
    queryFn: fetchMyPosts,
  });
};

export default useMyPosts;
