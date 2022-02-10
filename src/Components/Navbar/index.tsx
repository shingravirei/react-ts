import { Link } from 'react-location';

const Navbar = (): JSX.Element => (
	<nav>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
	</nav>
);

export default Navbar;
