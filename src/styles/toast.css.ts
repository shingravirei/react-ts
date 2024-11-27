import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/vars.css';

export const toastBase = style({
	borderRadius: '6px',
	padding: '12px 16px',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
});

export const toastDescription = style({
	fontSize: '14px',
	fontWeight: 400,
});

export const toastSuccess = style({
	backgroundColor: colors.success,
	color: colors.background,
});
