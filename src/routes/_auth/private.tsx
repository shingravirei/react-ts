import { createFileRoute } from '@tanstack/react-router';
import { useAuthActions, useUser } from '~/features/auth/store/auth';

export const Route = createFileRoute('/_auth/private')({
	component: () => <Private />,
});

function Private() {
	const user = useUser();
	const { logout } = useAuthActions();
	const navigate = Route.useNavigate();

	return (
		<div>
			<div>hello, {user}</div>

			<button
				onClick={async () => {
					await logout();
					await navigate({ to: '/login' });
				}}
			>
				logout
			</button>
		</div>
	);
}
