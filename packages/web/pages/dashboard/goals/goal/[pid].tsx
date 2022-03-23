import { useRouter } from 'next/router';

import styles from './styles.module.scss';

export default function GoalName() {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<div className={styles.goalContainer}>
			<h1>{pid}</h1>
		</div>
	);
}
