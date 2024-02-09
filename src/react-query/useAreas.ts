import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Area } from 'src/types';
import queryKeys from './queryKey';

const fetchAreas = async () => {
  const response = await axiosInstance.get('/api/v1/area/all');
  return response.data.response;
};

const useAreas = () => {
  return useQuery<Area[]>({
    queryKey: [queryKeys.useAreas],
    queryFn: fetchAreas,
  });
};

export default useAreas;
