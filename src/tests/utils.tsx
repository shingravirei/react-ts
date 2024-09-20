import {
	createMemoryHistory,
	createRouter,
	RouterContextProvider,
} from '@tanstack/react-router';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { routeTree } from '~/routeTree.gen';

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<RouterContextProvider router={router}>
			{children}
		</RouterContextProvider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
