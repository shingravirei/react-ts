import { DOMAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export type ButtonProps = DOMAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	variant?: ButtonVariants;
	className?: string;
};
export type ButtonRef = HTMLButtonElement;

export type ButtonVariants = 'primary' | 'danger' | 'info' | 'warning';

const buttonVariants: Record<ButtonVariants, string> = {
	primary: 'bg-blue-400 hover:bg-blue-300',
	danger: 'bg-red-400 hover:bg-red-300',
	info: 'bg-green-400 hover:bg-green-300',
	warning: 'bg-yellow-400 hover:bg-yellow-300',
};

export const Button = forwardRef<ButtonRef, ButtonProps>(
	({ children, variant = 'primary', className, ...rest }, ref) => {
		return (
			<button
				{...rest}
				ref={ref}
				className={clsx(
					'min-w-14 px-4 py-2 rounded-md font-semibold text-gray-900',
					buttonVariants[variant],
					className,
				)}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';
