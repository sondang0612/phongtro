import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from './queryKey';
export type Province = {
  province_id: number;
  province_name: string;
  province_type: string;
};
const fetchVietNamProvinces = async () => {
  const response = await axios.get('https://vapi.vnappmob.com/api/province/');
  return response.data.results;
};

const useVietNamProvinces = () => {
  return useQuery<Province[]>({
    queryKey: [queryKeys.useVietNamProvinces],
    queryFn: fetchVietNamProvinces,
  });
};

export default useVietNamProvinces;
