import Link from 'next/link';
import { useRouter } from 'next/router';

import { useRef } from 'react';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

import { Input } from '../../components/Input';

import { api } from '../../../../shared/axios';

import styles from './styles.module.scss';

interface FormData {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
}

export default function SignUp() {
	const router = useRouter();
	const formRef = useRef(null);

	const handleSubmit: SubmitHandler = async (data: FormData, { reset }) => {
		const { name, email, password, repeatPassword } = data;

		try {
			if (!name || !email || !password) throw new Error('Invalid data');

			if (password !== repeatPassword) {
				throw new Error('Password does not match');
			}

			const response = await api.post('/users', { name, email, password });

			alert(JSON.stringify(response, null, 2));
			reset();

			router.push('/login');
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className={styles.signUpContainer}>
			<h1>Welcome. Sign up now!</h1>
			<p>Start planning your studies.</p>

			<div className={styles.formContainer}>
				<Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
					<Input
						name="name"
						label="Full Name"
						placeholder="Ex.: John Doe"
						type="text"
						icon="imagem"
					/>
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
					<Input
						name="repeatPassword"
						label="Repeat password"
						placeholder="************"
						type="password"
						icon="imagem"
					/>

					<p>
						Already registered?{' '}
						<Link href="/login" passHref>
							<a>Login now</a>
						</Link>
						.
					</p>

					<button type="submit">Create account</button>
				</Form>
			</div>
		</div>
	);
}
