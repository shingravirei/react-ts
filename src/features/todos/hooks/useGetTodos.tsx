import { useQuery } from 'react-query';
import { getTodos } from '~/features/todos/api';
import { todoKeys } from '~/features/todos/hooks/query-keys';

export const useGetTodos = () =>
	useQuery({
		queryKey: todoKeys.all,
		queryFn: ({ signal }) => getTodos({ signal }),
	});
