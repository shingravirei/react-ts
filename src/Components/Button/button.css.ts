import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/vars.css';

export const button = style({
	all: 'unset',
	backgroundColor: colors.primary,
	color: colors.background,
	padding: '8px 12px',
	borderRadius: '6px',
});
