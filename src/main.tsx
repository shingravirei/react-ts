import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '~/index.css';
import { routeTree } from '~/routeTree.gen';

const router = createRouter({
	routeTree,
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const container = document.querySelector('#root');

if (!container) {
	throw new Error('root does not exists');
}

const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
