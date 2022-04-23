import clsx from 'clsx';
import { createElement, DOMAttributes, forwardRef } from 'react';

export type HeadingProps = DOMAttributes<HTMLHeadingElement> & {
	children: React.ReactNode;
	variant?: HeadingVariants;
	className?: string;
};

export type HeadingRef = HTMLHeadingElement;

export type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4';

export const Heading = forwardRef<HeadingRef, HeadingProps>(
	({ children, variant = 'h1', className, ...rest }, ref) =>
		createElement(
			variant,
			{
				...rest,
				className: clsx(className),
				ref,
			},
			children,
		),
);

Heading.displayName = 'Heading';
