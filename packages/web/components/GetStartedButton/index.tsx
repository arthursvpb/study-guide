import styles from './styles.module.scss';

import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export function GetStartedButton() {
	return (
		<Link href="/signup" passHref>
			<button type="button" className={styles.getStartedButton}>
				<FiArrowRight color="#f5f5f5" className={styles.userIcon} />
				Get Started
			</button>
		</Link>
	);
}
