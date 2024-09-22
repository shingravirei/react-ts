import { useQuery } from '@tanstack/react-query';
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

export const getTodos = ({ signal }: GetTodosParams): Promise<Todo[]> =>
	jsonplaceholderApi.get('todos', { signal }).json();

export const useGetTodos = () =>
	useQuery({
		queryKey: ['todos'],
		queryFn: ({ signal }) => getTodos({ signal }),
	});
