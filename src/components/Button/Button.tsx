import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...restProps }: ButtonProps) => {
	return (
		<button className='bg-amber-400 px-3 py-1 rounded-md' {...restProps}>
			{children}
		</button>
	);
};
