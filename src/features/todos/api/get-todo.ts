import { useQuery } from '@tanstack/react-query';
import { todosQueryKeys } from '~/features/todos/api/query-keys';
import { jsonplaceholderApi } from '~/lib/api-client';

export interface Todo {
	userId: string;
	id: number;
	title: string;
	completed: boolean;
}

interface GetTodosParams {
	signal?: AbortSignal;
}

export const getTodos = ({ signal }: GetTodosParams) =>
	jsonplaceholderApi.get('todos', { signal }).json<Todo[]>();

export const useGetTodos = () =>
	useQuery({
		queryKey: todosQueryKeys.getTodos,
		queryFn: ({ signal }) => getTodos({ signal }),
	});
