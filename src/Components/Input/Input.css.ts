import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const btn = style({
	padding: `${vars.space.pb2} ${vars.space.pb4}`,
	fontFamily: vars.font.family.sans,
	fontSize: vars.font.size.md,
	border: `${vars.space.xs} solid ${vars.colors.snow1}`,
	borderRadius: vars.space[2],
	selectors: {
		'&:focus': {
			border: `${vars.space.xs} solid ${vars.colors.frost1}`,
			outline: 'transparent',
		},
	},
});
