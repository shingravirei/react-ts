import { Button } from '../Components/Button';
import { Input } from '../Components/Input';
import { Heading } from '../Components/Typography';

const Home = (): JSX.Element => (
	<div className='h-full'>
		<Heading variant='h1'>Home, Sweet, Home</Heading>
		<div>
			<Button onClick={() => console.log('hey')}>Button</Button>
			<Button variant='info'>Button</Button>
			<Button variant='danger'>Button</Button>
			<Button variant='warning'>Button</Button>
		</div>
		<div>
			<Button outlined>Button</Button>
			<Button variant='info' outlined>
				Button
			</Button>
			<Button variant='danger' outlined>
				Button
			</Button>
			<Button variant='warning' outlined>
				Button
			</Button>
			<Input type='text' className={'foo'} placeholder={'hello'} />
			<input type='email' name='' id='' disabled className='asd' />
		</div>

		<div>
			<select name='choice' className='rounded-md pl-4 py-2'>
				<option value='q'>hello</option>
				<option value='x'>hello world world</option>
			</select>
			<p style={{ maxWidth: '52.842rem' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				voluptatibus deserunt. Error corrupti modi, exercitationem
				repellendus provident alias placeat doloremque voluptatum
				molestias ipsa eligendi non numquam dolore eius nobis animi
				ratione voluptatibus architecto dolorem! Aliquid eos vero nulla
				tempora ipsum.
			</p>
		</div>
	</div>
);

export default Home;
