import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { useAuthStore } from '~/features/auth/store/auth';

interface NavLinkProps {
	to: string;
	children: ReactNode;
}
const NavLink = ({ to, children }: NavLinkProps) => (
	<Link to={to} data-open='true'>
		{children}
	</Link>
);

export const Navbar = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>

					<li>
						<NavLink to='/todos'>Todos</NavLink>
					</li>
					{isAuthenticated && (
						<li>
							<NavLink to='/private'>Private</NavLink>
						</li>
					)}
					{!isAuthenticated && (
						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
					)}
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
