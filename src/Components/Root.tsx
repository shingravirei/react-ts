import { Outlet } from 'react-router-dom';
import Navbar from '~/Components/Navbar';

const Root = () => {
	return (
		<div className='bg-zinc-800 text-zinc-50 h-full'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
