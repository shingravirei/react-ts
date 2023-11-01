import ky, { Options } from 'ky';

const todosApi = ky.create({
	prefixUrl: 'https://jsonplaceholder.typicode.com/todos',
});

export interface Todo {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}

export const getTodos = (options: Options) =>
	todosApi.get('', options).json<Array<Todo>>();
