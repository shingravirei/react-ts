import type {} from '@redux-devtools/extension';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const timeout = (duration: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, duration);
	});

export interface AuthState {
	isAuthenticated: boolean;
	user?: string;
}

export const useAuthStore = create<AuthState>()(
	devtools(
		(_) => ({
			isAuthenticated: false,
			user: undefined,
		}),
		{ name: 'authStore' },
	),
);

export const login = async (username: string) => {
	await timeout(150);

	useAuthStore.setState(() => ({ isAuthenticated: true, user: username }));
};

export const logout = async () => {
	await timeout(1000);

	useAuthStore.setState(() => ({ isAuthenticated: false, user: undefined }));
};
