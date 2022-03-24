import styles from './styles.module.scss';

import { FiCrosshair, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Goals() {
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

	return (
		<div className={styles.goalsContainer}>
			<h1>My Goals</h1>

			<div className={styles.goals}>
				{goals.map(goal => (
					<Link
						href={`/dashboard/goals/goal/${goal.id}`}
						passHref
						key={goal.id}
					>
						<button className={styles.goal}>
							<h2>{goal.name}</h2>
							<FiCrosshair />
						</button>
					</Link>
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
