import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteData } from './apiData';

export function useDeleteData() {
  const queryClient = useQueryClient();

  const { mutate: deleteTable, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations'] });
    },
    onError: (err) => alert(err.message),
  });

  return { deleteTable, isDeleting };
}
