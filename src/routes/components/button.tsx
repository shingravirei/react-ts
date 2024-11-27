import { createFileRoute } from '@tanstack/react-router';
import { Button } from '~/Components/Button/Button';

export const Route = createFileRoute('/components/button')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div style={{ margin: '0 16px' }}>
			<h1>Button</h1>
			<Button>Outlined</Button>
		</div>
	);
}
