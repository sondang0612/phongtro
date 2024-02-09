import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Post } from 'src/types';
import queryKeys from './queryKey';

const fetchPost = async (postId?: string) => {
  const response = await axiosInstance.get(`/api/v1/post/get/${postId}`);
  return response?.data.response;
};

const usePost = ({ postId }: { postId?: string }) => {
  return useQuery<Post>({
    queryKey: [queryKeys.usePost, postId],
    queryFn: () => fetchPost(postId),
    enabled: !!postId,
  });
};

export default usePost;
