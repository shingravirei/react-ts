import clsx from 'clsx';
import { FaTrash } from 'react-icons/fa6';
import {
	todoListItemBase,
	todoListItemCompleted,
	todoListItemTrashIcon,
} from '~/features/todos/Components/styles.css';
import { Todo } from '~/features/todos/api';

export interface TodoListProps {
	todos: Array<Todo>;
}

export interface TodoListItemProps {
	todo: Todo;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => (
	<div
		className={clsx({
			[todoListItemBase]: true,
			[todoListItemCompleted]: todo.completed,
		})}
	>
		<span>{todo.title}</span>
		<span className={todoListItemTrashIcon}>
			<FaTrash />
		</span>
	</div>
);

export const TodoList = ({ todos }: TodoListProps) => (
	<div>
		{todos.map((todo) => (
			<TodoListItem key={todo.id} todo={todo} />
		))}
	</div>
);
