import { createFileRoute } from '@tanstack/react-router';
import { login } from '~/store/auth';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const navigate = Route.useNavigate();

	return (
		<div>
			<h1>React TS</h1>
			<button
				onClick={async () => {
					await login(crypto.randomUUID());

					await navigate({ to: '/private' });
				}}
			>
				login
			</button>
		</div>
	);
}
