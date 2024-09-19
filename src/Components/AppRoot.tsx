import { Outlet } from 'react-router';
import { Navbar } from '~/Components/Navbar/Navbar';
import '~/index.css';

const AppRoot = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default AppRoot;
