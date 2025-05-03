import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...restProps }: ButtonProps) => {
	return <button {...restProps}>{children}</button>;
};
