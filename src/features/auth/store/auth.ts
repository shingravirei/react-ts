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
	actions: {
		login: (username: string) => Promise<void>;
		logout: () => Promise<void>;
	};
}

export const useAuthStore = create<AuthState>()(
	devtools(
		(set) => ({
			isAuthenticated: false,
			user: undefined,
			actions: {
				login: async (username: string) => {
					await timeout(150);

					set(
						() => ({ isAuthenticated: true, user: username }),
						undefined,
						{
							type: 'auth/login',
							username,
						},
					);
				},
				logout: async () => {
					await timeout(150);

					set(
						() => ({ isAuthenticated: false, user: undefined }),
						undefined,
						'auth/logout',
					);
				},
			},
		}),
		{
			name: 'authStore',
			serialize: {
				options: true,
			},
		},
	),
);

export const useIsAuthenticated = () =>
	useAuthStore((state) => state.isAuthenticated);
export const useUser = () => useAuthStore((state) => state.user);
export const useAuthActions = () => useAuthStore((state) => state.actions);
