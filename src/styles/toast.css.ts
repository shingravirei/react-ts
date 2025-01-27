import { style } from '@vanilla-extract/css';
import { colors, shadow } from '~/styles/vars.css';

export const toastBase = style({
	borderRadius: '6px',
	padding: '12px 16px',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: shadow.md,
	width: '280px',
	backgroundColor: colors.brown[200],
	color: colors.brown[800],
	borderColor: colors.brown[500],
});

export const toastDescription = style({
	fontSize: '14px',
	fontWeight: 400,
});

export const toastInfo = style({
	backgroundColor: colors.purple[200],
	color: colors.purple[800],
	borderColor: colors.purple[500],
});

export const toastSuccess = style({
	backgroundColor: colors.green[200],
	color: colors.green[800],
	borderColor: colors.green[500],
});

export const toastDanger = style({
	backgroundColor: colors.red[200],
	color: colors.red[800],
	borderColor: colors.red[500],
});

export const toastWarning = style({
	backgroundColor: colors.orange[200],
	color: colors.orange[800],
	borderColor: colors.orange[500],
});
