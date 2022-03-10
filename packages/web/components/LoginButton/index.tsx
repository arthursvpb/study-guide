import styles from './styles.module.scss';

import { FiUser } from 'react-icons/fi';

export function LoginButton() {
	return (
		<button type="button" className={styles.loginButton}>
			<FiUser color="#60D394" className={styles.userIcon} />
			Login
		</button>
	);
}
