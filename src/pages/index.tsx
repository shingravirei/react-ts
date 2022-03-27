import { Button } from '../Components/Button';
import { Heading } from '../Components/Typography';

const Home = (): JSX.Element => (
	<div className='bg-gray-900 h-full'>
		<Heading variant='h2'>Home, Sweet, Home</Heading>
		<Button>Button</Button>
		<Button variant='info'>Button</Button>
		<Button variant='danger'>Button</Button>
		<Button variant='warning'>Button</Button>
		<div>
			<input
				type='email'
				name='name'
				className='rounded-md'
				placeholder='name'
			/>
			<select name='choice' className='rounded-md pl-4 py-2'>
				<option value='q'>hello</option>
				<option value='x'>hello world world</option>
			</select>
		</div>
	</div>
);

export default Home;
