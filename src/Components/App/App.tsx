import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Navbar from '../Navbar';

const App = (): JSX.Element => {
	return (
		<div className='h-full'>
			<Navbar />
			<Suspense fallback={<p>loading....</p>}>
				{useRoutes(routes)}
			</Suspense>
		</div>
	);
};

export default App;
