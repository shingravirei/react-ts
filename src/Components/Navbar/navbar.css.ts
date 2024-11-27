import { style } from '@vanilla-extract/css';
import { spacing } from '~/lib/css-helpers';
import { colors } from '~/styles/vars.css';

export const navContainer = style({
	display: 'flex',
	justifyContent: 'center',
	padding: `${spacing(2)} ${spacing(3)}`,
});

export const navList = style({
	display: 'flex',
	listStyle: 'none',
	padding: 0,
	gap: spacing(2),
});

export const navLink = style({
	textDecoration: 'none',
	color: colors.text,
	fontSize: '18px',
	':visited': {
		color: 'inherit',
	},
	selectors: {
		'&[data-status="active"]': {
			color: colors.primary,
		},
	},
});
