import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarLinkProps {
	to: string;
	children: ReactNode;
}

const NavbarLink = ({ to, children }: NavbarLinkProps) => (
	<NavLink to={to}>{children}</NavLink>
);

const Navbar = () => (
	<nav>
		<ul>
			<li>
				<NavbarLink to='/'>Home</NavbarLink>
			</li>
			<li>
				<NavbarLink to='/about'>About</NavbarLink>
			</li>
		</ul>
	</nav>
);

export default Navbar;
