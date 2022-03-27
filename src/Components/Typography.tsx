import clsx from 'clsx';
import { createElement, DOMAttributes, forwardRef } from 'react';

export type HeadingProps = DOMAttributes<HTMLHeadingElement> & {
	children: React.ReactNode;
	variant?: HeadingVariants;
	className?: string;
};

export type HeadingRef = HTMLHeadingElement;

export type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4';

const HeadingStyles: Record<HeadingVariants, string> = {
	h1: 'text-4xl font-semibold',
	h2: 'text-3xl font-semibold',
	h3: 'text-2xl font-semibold',
	h4: 'text-xl font-semibold',
};

export const Heading = forwardRef<HeadingRef, HeadingProps>(
	({ children, variant = 'h1', className, ...rest }, ref) =>
		createElement(
			variant,
			{
				...rest,
				className: clsx(HeadingStyles[variant], className),
				ref,
			},
			children,
		),
);

Heading.displayName = 'Heading';
