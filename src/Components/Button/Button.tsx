import { ComponentPropsWithoutRef } from 'react';
import { button } from '~/Components/Button/button.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...restProps }: ButtonProps) => {
	return (
		<button className={button} {...restProps}>
			{children}
		</button>
	);
};
