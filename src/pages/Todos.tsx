import { match } from 'ts-pattern';
import { Heading } from '~/Components/Typography/Heading';
import { TodoList } from '~/features/todos/Components/TodoList';
import { useGetTodos } from '~/features/todos/hooks/useGetTodos';

const Todos = () => {
	const todosQuery = useGetTodos();

	return (
		<>
			<Heading>Todos</Heading>
			<Heading as='h2'>Todos</Heading>
			<div>
				{match(todosQuery)
					.with({ status: 'idle' }, () => <div>idle</div>)
					.with({ status: 'loading' }, () => <div>loading</div>)
					.with({ status: 'error' }, () => <div>error</div>)
					.with({ status: 'success' }, ({ data }) => (
						<TodoList todos={data?.slice(0, 10) ?? []} />
					))
					.exhaustive()}
			</div>
		</>
	);
};

export default Todos;
