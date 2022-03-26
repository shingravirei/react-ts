import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => (
	<nav>
		<ul>
			<li>
				<Link to='/'>Homee</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
		</ul>
	</nav>
);

export default Navbar;
