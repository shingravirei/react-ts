import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { getTodos, useGetTodos } from '~/features/todos/api/get-todo';
import { Providers } from '~/tests/utils';

describe('get-todo', () => {
	test('successful response', async () => {
		const todos = await getTodos({});

		expect(todos.at(0)).toHaveProperty('userId');
		expect(todos.at(0)).toHaveProperty('id');
		expect(todos.at(0)).toHaveProperty('title');
		expect(todos.at(0)).toHaveProperty('completed');
	});
});

describe('useGetTodos', () => {
	test('successful response', async () => {
		const { result } = renderHook(() => useGetTodos(), {
			wrapper: Providers,
		});

		await waitFor(() => expect(result.current.isSuccess).toBe(true));
	});
});
