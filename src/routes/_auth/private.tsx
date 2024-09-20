import { createFileRoute } from '@tanstack/react-router';
import { logout, useAuthStore } from '~/store/auth';

export const Route = createFileRoute('/_auth/private')({
	component: () => <Private />,
});

function Private() {
	const user = useAuthStore((state) => state.user);

	return (
		<div>
			<div>{user}</div>

			<button onClick={async () => await logout()}>logout</button>
		</div>
	);
}
