import { createFileRoute } from '@tanstack/react-router';
import { useGetTodos } from '~/features/todos/api/get-todo';

export const Route = createFileRoute('/todos/')({
	component: Todos,
});

function Todos() {
	const query = useGetTodos();

	if (query.isLoading) {
		return <div>loading...</div>;
	}

	return (
		<>
			<h1>Todos</h1>
			{query.data?.map((todo) => <div key={todo.id}>{todo.title}</div>)}
		</>
	);
}
