import { useRef } from 'react';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

import { Input } from '../../../../components/Input';

import styles from './styles.module.scss';

export default function NewGoal() {
	const formRef = useRef(null);
	const handleSubmit: SubmitHandler = (data: FormData, { reset }) => {
		console.log(data);

		reset();
	};

	return (
		<div className={styles.newGoalContainer}>
			<h1>Create a new goal</h1>

			<div className={styles.newGoal}>
				<Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
					<Input
						name="name"
						label="Full Name"
						placeholder="Ex.: Become a back-end developer"
						type="text"
						icon="imagem"
					/>
					<Input
						name="description"
						label="Description"
						placeholder="Ex.: This is my path to become a back-end developer."
						type="textarea"
						icon="imagem"
					/>

					<button type="submit">Create new goal</button>
				</Form>
			</div>
		</div>
	);
}
