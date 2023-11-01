import { PropsWithChildren } from 'react';
import { heading } from '~/Components/Typography/heading.css';

export interface HeadingOne extends PropsWithChildren {
	as?: keyof typeof heading;
}

export const Heading = ({ children, as = 'h1' }: HeadingOne) => {
	const Component = as;

	return <Component className={heading[as]}>{children}</Component>;
};
