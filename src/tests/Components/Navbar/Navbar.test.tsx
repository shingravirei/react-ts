import {
	createMemoryHistory,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router';
import { screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { routeTree } from '~/routeTree.gen';
import { render } from '~/tests/utils';

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

describe('Navbar', () => {
	test.concurrent('Home renders', async () => {
		render(<RouterProvider router={router} history={memoryHistory} />);

		await waitFor(() => {
			expect(screen.getByText('Home')).toBeInTheDocument();
		});
	});

	test.concurrent('About renders', () => {
		render(<RouterProvider router={router} history={memoryHistory} />);

		expect(screen.getByText('About')).toBeInTheDocument();
	});
});
