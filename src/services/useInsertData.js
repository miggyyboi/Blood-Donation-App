import { useMutation, useQueryClient } from '@tanstack/react-query';
import { insertData as insertDataApi } from './apiData';

export function useInsertData() {
  const queryClient = useQueryClient();

  const { mutate: insertData, isLoading: isInserting } = useMutation({
    mutationFn: (table) => insertDataApi(table),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations'] });
    },
    onError: (err) => alert(err.message),
  });

  return { insertData, isInserting };
}
