import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$')({
	component: NotFound,
});

function NotFound() {
	const params = Route.useParams();

	return (
		<div>
			Not Found! <code>{params._splat}</code>!
		</div>
	);
}
