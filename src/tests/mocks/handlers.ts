import { http, HttpHandler, HttpResponse } from 'msw';

export const handlers: HttpHandler[] = [
	http.get('*/todos', () =>
		HttpResponse.json([
			{
				userId: 1,
				id: 1,
				title: 'delectus aut autem',
				completed: false,
			},
			{
				userId: 1,
				id: 2,
				title: 'quis ut nam facilis et officia qui',
				completed: false,
			},
		]),
	),
];