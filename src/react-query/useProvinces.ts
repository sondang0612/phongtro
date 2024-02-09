import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Province } from 'src/types';
import queryKeys from './queryKey';

const fetchProvinces = async () => {
  const response = await axiosInstance.get('/api/v1/province/all');
  return response?.data.response;
};

const useProvinces = () => {
  return useQuery<Province[]>({
    queryKey: [queryKeys.useProvinces],
    queryFn: fetchProvinces,
  });
};

export default useProvinces;
