import {
	createRootRoute,
	ErrorComponentProps,
	Outlet,
} from '@tanstack/react-router';
import { lazy } from 'react';
import { Navbar } from '~/components/Navbar/Navbar';

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/react-router-devtools').then((module) => ({
					default: module.TanStackRouterDevtools,
				})),
			);

const TanStackQueryDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/react-query-devtools').then((module) => ({
					default: module.ReactQueryDevtools,
				})),
			);

export const Route = createRootRoute({
	component: RootRoute,
	errorComponent: ErrorComp,
});

function ErrorComp({ error, reset }: ErrorComponentProps) {
	return (
		<div>
			<h1>Error, {error.message}</h1>
			<button onClick={() => reset()}>reset</button>
		</div>
	);
}

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
