import { ReactLocation, Route, Router as BrowserRouter } from 'react-location';
import { ReactLocationDevtools } from 'react-location-devtools';
import App from './Components/App';
import About from './Pages/About';
import Home from './Pages/Home';

const location = new ReactLocation();

const routes: Route[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
];

const Router = () => (
	<BrowserRouter location={location} routes={routes}>
		<App />
		<ReactLocationDevtools initialIsOpen={false} />
	</BrowserRouter>
);

export default Router;
