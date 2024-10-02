import { QueryClientProvider } from '@tanstack/react-query';
import {
	createMemoryHistory,
	createRouter,
	RouterContextProvider,
} from '@tanstack/react-router';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { queryClient } from '~/app/query-client';
import { routeTree } from '~/routeTree.gen';

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterContextProvider router={router}>
				{children}
			</RouterContextProvider>
		</QueryClientProvider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
