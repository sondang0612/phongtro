import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from './queryKey';
export type District = {
  district_id: number;
  district_name: string;
};
const fetchVietNamDistricts = async (provinceId?: number) => {
  const response = await axios.get(
    `https://vapi.vnappmob.com/api/province/district/${provinceId}`
  );
  return response.data.results;
};

const useVietNamDistrictsByProvinceId = ({
  provinceId,
}: {
  provinceId?: number;
}) => {
  return useQuery<District[]>({
    queryKey: [queryKeys.useVietNamDistrictsByProvinceId, { provinceId }],
    queryFn: () => fetchVietNamDistricts(provinceId),
    enabled: !!provinceId,
  });
};

export default useVietNamDistrictsByProvinceId;
