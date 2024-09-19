import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppRoot from '~/Components/AppRoot';

const Home = lazy(() =>
	import('~/pages/Home').then((module) => ({ default: module.Home })),
);
const About = lazy(() =>
	import('~/pages/About').then((module) => ({ default: module.About })),
);
const ErrorPage = lazy(() =>
	import('~/pages/ErrorPage').then((module) => ({
		default: module.ErrorPage,
	})),
);

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppRoot />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					<Suspense>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense>
						<About />
					</Suspense>
				),
			},
		],
	},
]);
