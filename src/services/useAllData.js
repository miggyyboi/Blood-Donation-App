import { useQuery } from '@tanstack/react-query';
import { getDonations } from './apiData';

export function useAllData() {
  const { data, isLoading } = useQuery({
    queryKey: ['donations'],
    queryFn: getDonations,
  });

  return { data, isLoading };
}

