import { useRef } from 'react';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

import { Input } from '../../components/Input';

import styles from './styles.module.scss';

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
			<h1>Welcome. Sign up now!</h1>
			<p>Start planning your studies.</p>

			<Form ref={formRef} onSubmit={handleSubmit}>
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

				<button type="submit">Create account</button>
			</Form>
		</div>
	);
}
