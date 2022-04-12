import { useRef } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

import { Input } from '../../components/Input';

import { api } from '../../../../shared/axios';

import styles from '../signup/styles.module.scss';

interface FormData {
	email: string;
	password: string;
}

export default function SignUp() {
	const router = useRouter();
	const formRef = useRef(null);

	const handleSubmit: SubmitHandler = async (data: FormData, { reset }) => {
		const { email, password } = data;

		console.log(email, password);

		try {
			if (!email || !password) throw new Error('Invalid data');

			const { data } = await api.post('/users/auth', { email, password });

			alert(JSON.stringify(data, null, 2));
			reset();

			router.push('/dashboard');
		} catch (error) {
			alert(error);
		}

		reset();
	};

	return (
		<div className={styles.signUpContainer}>
			<h1>Welcome back!</h1>
			<p>Continue planning your studies.</p>

			<div className={styles.formContainer}>
				<Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
					<Input
						name="email"
						label="E-mail"
						placeholder="Ex.: johndoe@mail.com"
						type="email"
						icon="imagem"
					/>
					<Input
						name="password"
						label="Password"
						placeholder="************"
						type="password"
						icon="imagem"
					/>

					<p>
						Doesnt have an account?{' '}
						<Link href="/signup" passHref>
							<a>Create an account</a>
						</Link>
						.
					</p>

					<button type="submit">Login</button>
				</Form>
			</div>
		</div>
	);
}
