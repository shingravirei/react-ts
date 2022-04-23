import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../styles/theme.css';

export const btn = recipe({
	base: style({
		color: vars.colors.polar1,
		minWidth: vars.space[7],
		padding: `${vars.space[2]} ${vars.space[4]}`,
		cursor: 'pointer',
		border: 'none',
		borderRadius: vars.space[2],
		fontFamily: vars.font.family.sans,
		fontSize: vars.font.size.md,
		fontWeight: vars.font.weight.semibold,
		selectors: {
			'&:disabled': {
				backgroundColor: vars.colors.snow1,
				color: vars.colors.polar4,
				cursor: 'not-allowed',
				border: 'none',
				padding: `${vars.space[2]} ${vars.space[4]}`,
			},
		},
	}),

	variants: {
		color: {
			primary: style({
				background: vars.colors.frost1,
			}),
			danger: style({
				background: vars.colors.aurora1,
			}),
			info: style({
				background: vars.colors.aurora4,
			}),
			warning: style({
				background: vars.colors.aurora2,
			}),
		},
		outlined: {
			true: style({
				padding: `${vars.space.pb2} ${vars.space.pb4}`,
				background: 'transparent',
				borderWidth: vars.space.xs,
				borderStyle: 'solid',
				borderColor: 'currentcolor',
			}),
		},
	},
	compoundVariants: [
		{
			variants: {
				color: 'primary',
				outlined: true,
			},
			style: style({
				color: vars.colors.frost1,
			}),
		},
		{
			variants: {
				color: 'danger',
				outlined: true,
			},
			style: style({
				color: vars.colors.aurora1,
			}),
		},
		{
			variants: {
				color: 'info',
				outlined: true,
			},
			style: style({
				color: vars.colors.aurora4,
			}),
		},
		{
			variants: {
				color: 'warning',
				outlined: true,
			},
			style: style({
				color: vars.colors.aurora2,
			}),
		},
	],
	defaultVariants: {
		color: 'primary',
	},
});
