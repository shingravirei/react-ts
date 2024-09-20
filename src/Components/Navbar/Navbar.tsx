import { Link } from '@tanstack/react-router';

export const Navbar = () => (
	<header>
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/private'>Private</Link>
				</li>
			</ul>
		</nav>
	</header>
);
