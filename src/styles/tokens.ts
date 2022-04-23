import { math, modularScale } from 'polished';

export const space = {
	xxs: modularScale(-5, '1.125rem', 1.618),
	xs: modularScale(-4, '1.125rem', 1.618),
	1: modularScale(-3, '1.125rem', 1.618),
	2: modularScale(-2, '1.125rem', 1.618),
	3: modularScale(-1, '1.125rem', 1.618),
	4: modularScale(0, '1.125rem', 1.618),
	5: modularScale(1, '1.125rem', 1.618),
	6: modularScale(2, '1.125rem', 1.618),
	7: modularScale(3, '1.125rem', 1.618),
	8: modularScale(4, '1.125rem', 1.618),
	9: modularScale(5, '1.125rem', 1.618),
	10: modularScale(6, '1.125rem', 1.618),
	pb4: math(
		`${modularScale(0, '1.125rem', 1.618)} - ${modularScale(
			-4,
			'1.125rem',
			1.618,
		)}`,
	),
	pb2: math(
		`${modularScale(-2, '1.125rem', 1.618)} - ${modularScale(
			-4,
			'1.125rem',
			1.618,
		)}`,
	),
};

export const colors = {
	polar1: '#2E3440',
	polar2: '#3B4252',
	polar3: '#434C5E',
	polar4: '#4C566A',
	snow1: '#D8DEE9',
	snow2: '#E5E9F0',
	snow3: '#ECEFF4',
	frost1: '#8FBCBB',
	frost2: '#88C0D0',
	frost3: '#81A1C1',
	frost4: '#5E81AC',
	aurora1: '#BF616A',
	aurora2: '#D08770',
	aurora3: '#EBCB8B',
	aurora4: '#A3BE8C',
	aurora5: '#B48EAD',
	currentcolor: 'currentColor',
	transparent: 'transparent',
};

export const font = {
	body: 'Noto Sans',
	family: {
		sans: 'Noto Sans',
	},
	button: 'Noto Sans',
	size: {
		xs: modularScale(-2, '1.125rem', 1.618),
		sm: modularScale(-1, '1.125rem', 1.618),
		md: modularScale(0, '1.125rem', 1.618),
		lg: modularScale(1, '1.125rem', 1.618),
		xl: modularScale(2, '1.125rem', 1.618),
	},
	weight: {
		regular: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
	},
};
