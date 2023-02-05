import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export type NavbarLinkProps = {
	to: string;
	children: ReactNode;
};

const NavbarLink = ({ to, children }: NavbarLinkProps) => (
	<NavLink
		to={to}
		className={({ isActive }) => (isActive ? 'text-green-300' : '')}
	>
		{children}
	</NavLink>
);

const Navbar = () => (
	<nav>
		<ul className='flex justify-center gap-4 text-lg py-2'>
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
