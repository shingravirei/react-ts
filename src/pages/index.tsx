import { Button, Heading } from '../Components/Typography';

const Home = (): JSX.Element => (
	<>
		<Heading variant='h1' className={'text-indigo-900 text-base'}>
			Home, Sweet, Home
		</Heading>
		<Button variant='info'>Button</Button>
		<Button variant='danger'>Button</Button>
	</>
);

export default Home;
