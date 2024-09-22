import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$')({
	component: () => {
		const params = Route.useParams();

		return (
			<div>
				Not Found! <code>{params._splat}</code>!
			</div>
		);
	},
});
