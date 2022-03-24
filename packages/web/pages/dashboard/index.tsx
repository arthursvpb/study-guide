/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import styles from './styles.module.scss';

export default function Dashboard() {
	return (
		<div className={styles.dashboardContainer}>
			<div className={styles.dashboard}>
				<div>
					<h1>Hello, Arthur Vasconcellos.</h1>
					<p>Create your first goal now.</p>

					<Link href="/dashboard/goals/new" passHref>
						<button className={styles.createGoal}>
							<img
								src="/images/undraw_add_post_re_174w.svg"
								alt="Add new goal"
							/>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const goals = true;

	if (goals) {
		return {
			redirect: {
				permanent: false,
				destination: '/dashboard/goals/'
			}
		};
	}

	return {
		props: {}
	};
};
