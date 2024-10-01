import { createRootRoute, Outlet } from '@tanstack/react-router';
import { lazy } from 'react';
import { Navbar } from '~/Components/Navbar/Navbar';

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? // eslint-disable-next-line unicorn/no-null
			() => null
		: lazy(() =>
				import('@tanstack/router-devtools').then((module) => ({
					default: module.TanStackRouterDevtools,
				})),
			);

const TanStackQueryDevtools =
	process.env.NODE_ENV === 'production'
		? // eslint-disable-next-line unicorn/no-null
			() => null
		: lazy(() =>
				import('@tanstack/react-query-devtools').then((module) => ({
					default: module.ReactQueryDevtools,
				})),
			);

export const Route = createRootRoute({
	component: RootRoute,
});

function RootRoute() {
	return (
		<>
			<Navbar />
			<Outlet />
			<TanStackRouterDevtools initialIsOpen={false} />
			<TanStackQueryDevtools initialIsOpen={false} position='right' />
		</>
	);
}
