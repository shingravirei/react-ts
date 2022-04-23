import {
	ButtonHTMLAttributes,
	DOMAttributes,
	forwardRef,
	HTMLAttributes,
} from 'react';
import clsx from 'clsx';
import * as styles from './Button.css';

export type ButtonProps = DOMAttributes<HTMLButtonElement> &
	ButtonHTMLAttributes<HTMLButtonElement> &
	HTMLAttributes<HTMLButtonElement> & {
		variant?: ButtonVariants;
		outlined?: boolean;
	};
export type ButtonRef = HTMLButtonElement;

export type ButtonVariants = 'primary' | 'danger' | 'info' | 'warning';

export const Button = forwardRef<ButtonRef, ButtonProps>(
	({ children, variant = 'primary', outlined, className, ...rest }, ref) => {
		return (
			<button
				{...rest}
				ref={ref}
				className={clsx(
					styles.btn({
						color: variant,
						outlined,
					}),
					className,
				)}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';
