import { Outlet } from 'react-location';
import Navbar from '../Navbar';

const App = (): JSX.Element => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default App;
