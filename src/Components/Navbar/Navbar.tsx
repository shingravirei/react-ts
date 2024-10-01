import { Link } from '@tanstack/react-router';
import { useAuthStore } from '~/features/auth/store/auth';

export const Navbar = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	return (
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
						<Link to='/todos'>Todos</Link>
					</li>
					{isAuthenticated && (
						<li>
							<Link to='/private'>Private</Link>
						</li>
					)}
					{!isAuthenticated && (
						<li>
							<Link to='/login'>Login</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};
