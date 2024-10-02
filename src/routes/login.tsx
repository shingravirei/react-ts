import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuthActions } from '~/features/auth/store/auth';

export const Route = createFileRoute('/login')({
	component: Login,
});

const loginSchema = z.object({
	username: z.string().min(3),
});

type LoginForm = z.infer<typeof loginSchema>;

function Login() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setFocus,
	} = useForm<LoginForm>({
		resolver: zodResolver(loginSchema),
	});
	const navigate = Route.useNavigate();
	const loginFormId = useId();
	const { login } = useAuthActions();

	const onSubmit: SubmitHandler<LoginForm> = async ({ username }) => {
		await login(username);
		await navigate({
			to: '/private',
		});
		reset();
	};

	useEffect(() => {
		setFocus('username');
	}, [setFocus]);

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor={loginFormId}>username: </label>
				<input type='text' {...register('username')} id={loginFormId} />
				{errors.username && <div>{errors.username.message}</div>}
				<button type='submit'>submit</button>
			</form>
		</>
	);
}
