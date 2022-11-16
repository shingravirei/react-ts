import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '~/Components/Root';

const Home = lazy(() => import('~/pages/Home'));
const About = lazy(() => import('~/pages/About'));
const ErrorPage = lazy(() => import('~/pages/ErrorPage'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);
