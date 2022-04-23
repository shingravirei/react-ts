import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => (
	<nav>
		<ul className='flex justify-center text-xl'>
			<li className='px-2'>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/other' style={{ color: '#ECEFF4' }}>
					Other
				</Link>
			</li>
		</ul>
	</nav>
);

export default Navbar;
