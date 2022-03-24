import { useRouter } from 'next/router';

import styles from './styles.module.scss';

export default function GoalName() {
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

			<button>Add a new topic</button>
		</div>
	) : (
		<div>Not found</div>
	);
}
