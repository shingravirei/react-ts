import { sprinkles } from '~/styles/sprinkles.css';

const Home = () => (
	<div>
		<h1>Home</h1>
		<button className={sprinkles({ py: 'xs', px: 'sm', fontSize: 'md' })}>
			button
		</button>
		<div
			className={sprinkles({
				display: 'flex',
				gap: ['md', 'lg', 'xl'],
			})}
		>
			<div
				style={{
					width: '50px',
					height: '50px',
					backgroundColor: 'tomato',
				}}
			/>
			<div
				style={{
					width: '50px',
					height: '50px',
					backgroundColor: 'tomato',
				}}
			/>
		</div>
	</div>
);

export default Home;
