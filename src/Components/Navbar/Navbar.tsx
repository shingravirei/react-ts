import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

export interface AppLink extends PropsWithChildren {
	to: string;
}

const AppLink = ({ to, children }: AppLink) => (
	<NavLink to={to}>{children}</NavLink>
);

export const Navbar = () => (
	<header>
		<nav>
			<ul>
				<li>
					<AppLink to='/'>Home</AppLink>
				</li>

				<li>
					<AppLink to='/about'>About</AppLink>
				</li>
			</ul>
		</nav>
	</header>
);
