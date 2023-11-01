import { style } from '@vanilla-extract/css';

export const todoListItemBase = style({
	display: 'flex',
	alignItems: 'center',
});

export const todoListItemTrashIcon = style({
	color: 'crimson',
	selectors: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
});

export const todoListItemCompleted = style({
	textDecoration: 'line-through',
});
