import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';

const createPost = async (form: any) => {
  const response = await axiosInstance.post('/api/v1/post/create', form);
  return response.data;
};

const useCreatePost = () => {
  return useMutation({
    mutationFn: (form: any) => createPost(form),
  });
};

export default useCreatePost;
