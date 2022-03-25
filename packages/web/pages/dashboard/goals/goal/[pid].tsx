import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Modal as AddNewTopicModal } from '../../../../components/Modal';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

import { Input } from '../../../../components/Input';

import styles from './styles.module.scss';

export default function GoalName() {
	const formRef = useRef(null);
	const handleSubmit: SubmitHandler = (data: FormData, { reset }) => {
		console.log(data);

		reset();
	};

	const [isOpen, setIsOpen] = useState(false);

	const goals = [
		{
			id: 1,
			name: 'Back-end Developer',
			description: 'My path to become a back-end developer'
		},
		{
			id: 2,
			name: 'Front-end Developer',
			description: 'My path to become a front-end developer'
		},
		{
			id: 3,
			name: 'Full Stack Developer',
			description: 'My path to become a full stack developer'
		}
	];

	const router = useRouter();
	const { pid } = router.query;

	const goal = goals.find(goal => goal.id === Number(pid));

	return goal ? (
		<div className={styles.goalContainer}>
			<h1>{goal.name}</h1>
			<p>My path to become a back-end developer</p>

			<div>
				<h2>1. HTTP</h2>
				<h3>Resources</h3>
				<p>Youtube - HTTP Tutorial</p>
				<p>Youtube - HTTP Tutorial</p>
				<p>Youtube - HTTP Tutorial</p>
			</div>

			<button onClick={() => setIsOpen(true)}>Add a new topic</button>
			<AddNewTopicModal isOpen={isOpen}>
				<Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
					{/* Input add/remove fields dynamically */}
					<Input
						name="name"
						label="Topic name"
						placeholder="Ex.: HTTP"
						type="text"
						icon="imagem"
					/>
					<Input
						name="resources"
						label="Resources"
						placeholder="Youtube - HTTP Tutorial"
						type="textarea"
						icon="imagem"
					/>
					{/* <button>New resource</button> */}
					<button type="submit">Save</button>
					<button onClick={() => setIsOpen(false)}>Close</button>
				</Form>
			</AddNewTopicModal>
		</div>
	) : (
		<div>Not found</div>
	);
}
