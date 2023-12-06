import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateData as updateDataApi } from './apiData';

export function useUpdateData() {
  const queryClient = useQueryClient();

  const { mutate: updateData, isLoading: isUpdating } = useMutation({
    mutationFn: (table) => updateDataApi(table),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations'] });
    },
    onError: (err) => alert(err.message),
  });

  return { updateData, isUpdating };
}
