import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { User } from 'src/types';
import queryKeys from './queryKey';

const fetchCurrentUser = async () => {
  const response = await axiosInstance.get('/api/v1/user/get-current');
  return response.data.response;
};

const useCurrentUser = () => {
  return useQuery<User>({
    queryKey: [queryKeys.useCurrentUser],
    queryFn: fetchCurrentUser,
    retry: 3,
  });
};

export default useCurrentUser;
