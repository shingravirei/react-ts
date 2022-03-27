import { Button } from '../Components/Button';
import { Heading } from '../Components/Typography';

const Home = (): JSX.Element => (
	<>
		<Heading variant='h2'>Home, Sweet, Home</Heading>
		<Button>Button</Button>
		<Button variant='info'>Button</Button>
		<Button variant='danger'>Button</Button>
	</>
);

export default Home;
