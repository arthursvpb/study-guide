/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export default function Dashboard() {
	return (
		<div className={styles.dashboardContainer}>
			<div className={styles.dashboard}>
				<h1>Hello, Arthur Vasconcellos.</h1>
				<p>Create your first goal now.</p>

				<div className={styles.createGoal}>
					<img src="/images/undraw_add_post_re_174w.svg" alt="Add new goal" />
				</div>
			</div>
		</div>
	);
}
