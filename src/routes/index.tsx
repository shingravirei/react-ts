import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>React TS</h1>
		</div>
	);
}
