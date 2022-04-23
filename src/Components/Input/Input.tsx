import clsx from 'clsx';
import {
	DOMAttributes,
	forwardRef,
	HTMLAttributes,
	InputHTMLAttributes,
} from 'react';
import * as styles from './Input.css';

export type InputProps = DOMAttributes<HTMLInputElement> &
	InputHTMLAttributes<HTMLInputElement> &
	HTMLAttributes<HTMLInputElement>;

export type InputRef = HTMLInputElement;

export const Input = forwardRef<InputRef, InputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input
				{...rest}
				ref={ref}
				className={clsx(styles.btn, className)}
			/>
		);
	},
);

Input.displayName = 'Input';
