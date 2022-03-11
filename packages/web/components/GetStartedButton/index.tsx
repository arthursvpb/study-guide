import styles from './styles.module.scss';

import { FiArrowRight } from 'react-icons/fi';

export function GetStartedButton() {
	return (
		<button type="button" className={styles.getStartedButton}>
			<FiArrowRight color="#f5f5f5" className={styles.userIcon} />
			Get Started
		</button>
	);
}
