import type { StyleRule } from '@vanilla-extract/css';

type Responsive = Record<string, StyleRule>;

export const responsive = (
	size: 'xs' | 'sm' | 'md' | 'lg',
	rules: StyleRule,
): Responsive =>
	({
		xs: {
			'screen and (min-width: 360px)': {
				...rules,
			},
		},
		sm: {
			'screen and (min-width: 480px)': {
				...rules,
			},
		},
		md: {
			'screen and (min-width: 768px)': {
				...rules,
			},
		},
		lg: {
			'screen and (min-width: 1024px)': {
				...rules,
			},
		},
	})[size];

export const spacing = (size: number, unit: 'rem' | 'em' | 'px' = 'rem') =>
	`${size * 0.25}${unit}`;
