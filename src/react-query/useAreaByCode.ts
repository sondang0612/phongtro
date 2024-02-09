import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Area } from 'src/types';
import queryKeys from './queryKey';

const fetchAreaByCode = async (areaCode?: string) => {
  const response = await axiosInstance.get(`/api/v1/area/all/${areaCode}`);
  return response.data.response;
};

const useAreaByCode = ({ areaCode }: { areaCode?: string }) => {
  return useQuery<Area>({
    queryKey: [queryKeys.useAreaByCode, areaCode],
    queryFn: () => fetchAreaByCode(areaCode),
    enabled: !!areaCode,
  });
};

export default useAreaByCode;
