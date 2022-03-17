import { useRef } from 'react';
import Link from 'next/link';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

import { Input } from '../../components/Input';

import styles from '../signup/styles.module.scss';

interface FormData {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
}

export default function SignUp() {
	const formRef = useRef(null);
	const handleSubmit: SubmitHandler = (data: FormData, { reset }) => {
		console.log(data);

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
