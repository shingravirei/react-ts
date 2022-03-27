import clsx from 'clsx';
import { forwardRef } from 'react';

type ButtonProps = { children: React.ReactNode; variant?: 'danger' | 'info' };
type ButtonRef = HTMLButtonElement;

const buttonVariants = {
	default: '',
	danger: 'bg-red-400 border-none hover:bg-red-300',
	info: 'bg-green-400 border-none hover:bg-green-300',
};

export const Button = forwardRef<ButtonRef, ButtonProps>(
	({ children, variant }, ref) => {
		return (
			<button
				ref={ref}
				className={clsx(
					'min-w-14 px-4 py-2 border-2 rounded-md border-gray-900 border-solid font-semibold text-gray-900',
					buttonVariants[variant || 'default'],
				)}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';

type HeadingProps = {
	children: React.ReactNode;
	variant?: 'h1' | 'h2' | 'h3' | 'h4';
	className?: string;
};
type HeadingRef = HTMLHeadingElement;

export const Heading = forwardRef<HeadingRef, HeadingProps>(
	({ children, variant, className, ...rest }, ref) => {
		const defaultHeading = (
			<h1
				className={clsx('text-4xl font-semibold', className)}
				ref={ref}
				{...rest}
			>
				{children}
			</h1>
		);
		switch (variant) {
			case 'h1':
				return defaultHeading;

			case 'h2':
				return (
					<h2
						className={clsx('text-3xl font-semibold', className)}
						ref={ref}
					>
						{children}
					</h2>
				);

			case 'h3':
				return (
					<h3
						className={clsx('text-2xl font-semibold', className)}
						ref={ref}
					>
						{children}
					</h3>
				);

			case 'h4':
				return (
					<h4
						className={clsx('text-xl font-semibold', className)}
						ref={ref}
					>
						{children}
					</h4>
				);

			default:
				return defaultHeading;
		}
	},
);

Heading.displayName = 'Heading';
