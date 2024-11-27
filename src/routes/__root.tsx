import {
	createRootRoute,
	ErrorComponentProps,
	Outlet,
} from '@tanstack/react-router';
import { lazy } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { Toaster } from 'sonner';
import { Navbar } from '~/Components/Navbar/Navbar';
import '~/styles/theme.css';
import { toastBase, toastDescription, toastSuccess } from '~/styles/toast.css';

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/router-devtools').then((module) => ({
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
			<Toaster
				duration={3000}
				icons={{ success: <FaCheck /> }}
				toastOptions={{
					unstyled: true,
					className: toastBase,
					descriptionClassName: toastDescription,
					classNames: {
						success: toastSuccess,
					},
				}}
			/>
		</>
	);
}
