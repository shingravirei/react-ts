import { createFileRoute } from '@tanstack/react-router';
import { HTTPError } from 'ky';
import { toast } from 'sonner';
import { useGetTodos } from '~/features/todos/api/get-todo';
import { useSaveTodo } from '~/features/todos/api/save-todo';

export const Route = createFileRoute('/todos/')({
	component: Todos,
});

function Todos() {
	const getTodosQuery = useGetTodos();
	const saveTodoMutation = useSaveTodo();

	if (getTodosQuery.isLoading) {
		return <div>loading...</div>;
	}

	const handleSaveTodo = async () => {
		try {
			await saveTodoMutation.mutateAsync();
			toast.success('Saved new todo with success!', {
				description: 'some big description here',
			});
		} catch (error) {
			if (error instanceof HTTPError) {
				toast.error(error.message);
			} else {
				toast.error('Something went wrong, please try again!');
			}
		}
	};

	return (
		<>
			<h1>Todos</h1>
			<button
				disabled={saveTodoMutation.isPending || getTodosQuery.isLoading}
				onClick={handleSaveTodo}
			>
				save random todo
			</button>
			{getTodosQuery.data?.map((todo) => (
				<div key={todo.id}>{todo.title}</div>
			))}
		</>
	);
}
