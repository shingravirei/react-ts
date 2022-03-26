import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Navbar from '../Navbar/Navbar';

const App = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<Suspense fallback={<p>loading....</p>}>
				{useRoutes(routes)}
			</Suspense>
		</>
	);
};

export default App;
