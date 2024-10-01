import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { useAuthStore } from '~/features/auth/store/auth';

export const Route = createFileRoute('/_auth')({
	component: Outlet,
	beforeLoad: () => {
		const { isAuthenticated } = useAuthStore.getState();

		if (!isAuthenticated) {
			return redirect({ to: '/' });
		}
	},
});
