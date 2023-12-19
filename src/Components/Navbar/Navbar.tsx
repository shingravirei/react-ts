import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarLinkProps extends PropsWithChildren {
	to: string;
}

const NavbarLink = ({ to, children }: NavbarLinkProps) => (
	<NavLink to={to}>{children}</NavLink>
);

export const Navbar = () => (
	<header>
		<nav>
			<ul>
				<li>
					<NavbarLink to='/'>Home</NavbarLink>
				</li>

				<li>
					<NavbarLink to='/about'>[A]bout</NavbarLink>
				</li>
			</ul>
		</nav>
	</header>
);
