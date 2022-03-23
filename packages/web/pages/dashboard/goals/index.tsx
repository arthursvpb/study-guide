import styles from './styles.module.scss';

import { FiCrosshair, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function Goals() {
	const goals = [
		{ id: 1, name: 'Back-end Developer' },
		{ id: 2, name: 'Front-end Developer' },
		{ id: 3, name: 'Full Stack Developer' }
	];

	return (
		<div className={styles.goalsContainer}>
			<h1>My Goals</h1>

			<div className={styles.goals}>
				{goals.map(goal => (
					<button className={styles.goal} key={goal.id}>
						<h2>{goal.name}</h2>
						<FiCrosshair />
					</button>
				))}
			</div>

			<div className={styles.pagination}>
				<FiArrowLeft />
				<div> 1 </div>
				<div> 2 </div>
				<div> 3 </div>
				<FiArrowRight />
			</div>
		</div>
	);
}
