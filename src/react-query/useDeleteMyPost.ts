import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import queryKeys from './queryKey';

const deleteMyPost = async (postId: string) => {
  const response = await axiosInstance.delete(`/api/v1/post/${postId}`);
  return response.data;
};

const useDeleteMyPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId: string) => deleteMyPost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.useMyPosts] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.useNewestPosts] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.usePosts] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.usePostsLimit] });
    },
  });
};

export default useDeleteMyPost;
