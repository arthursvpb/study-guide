import Link from 'next/link';

import { LoginButton } from '../LoginButton';

import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<nav>
					<Link href="/" passHref>
						<a>
							<span className={styles.my}>My</span>
							<span className={styles.studies}>Studies</span>
						</a>
					</Link>
					<a className={styles.dashboard}>Dashboard</a>
				</nav>
				<LoginButton />
			</div>
		</header>
	);
}
