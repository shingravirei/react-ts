import { lazy, Suspense } from 'react';
import App from './Components/App';
import { ReactLocation, Router as BrowserRouter } from 'react-location';
import { ReactLocationDevtools } from 'react-location-devtools';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));

const location = new ReactLocation();

const Router = () => (
	<BrowserRouter
		location={location}
		routes={[
			{
				path: '/',
				element: (
					<Suspense fallback={'loading...'}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={'loading...'}>
						<About />
					</Suspense>
				),
			},
		]}
	>
		<App />
		<ReactLocationDevtools initialIsOpen={false} />
	</BrowserRouter>
);

export default Router;
