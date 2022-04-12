import Link from 'next/link';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { LoginButton } from '../LoginButton';

import styles from './styles.module.scss';

export function Header() {
	const { user } = useContext(AuthContext);

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
					<Link href="/dashboard" passHref>
						<a className={styles.dashboard}>Dashboard</a>
					</Link>
				</nav>
				{user ? <p>{user.name}</p> : <LoginButton />}
			</div>
		</header>
	);
}
