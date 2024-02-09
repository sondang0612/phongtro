import { useQuery } from '@tanstack/react-query';
import axiosInstance from 'src/axiosInstance';
import { Province } from 'src/types';
import queryKeys from './queryKey';

const fetchProvinceByCode = async (provinceCode?: string) => {
  const response = await axiosInstance.get(`/api/v1/province/${provinceCode}`);
  return response?.data.response;
};

const useProvinceByCode = ({ provinceCode }: { provinceCode?: string }) => {
  return useQuery<Province>({
    queryKey: [queryKeys.usePriceByCode, provinceCode],
    queryFn: () => fetchProvinceByCode(provinceCode),
    enabled: !!provinceCode,
  });
};

export default useProvinceByCode;
