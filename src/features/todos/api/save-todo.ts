import { useMutation } from '@tanstack/react-query';
import { queryClient } from '~/app/query-client';
import { todosQueryKeys } from '~/features/todos/api/query-keys';
import { jsonplaceholderApi } from '~/lib/api-client';

export interface SaveTodoResponse {
	id: number;
}

export const saveTodo = () =>
	jsonplaceholderApi.post('todos').json<SaveTodoResponse>();

export const useSaveTodo = () =>
	useMutation({
		mutationKey: todosQueryKeys.saveTodo,
		mutationFn: () => saveTodo(),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['todos'],
			});
		},
	});
