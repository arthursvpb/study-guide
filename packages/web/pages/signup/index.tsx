import { Input } from '../../components/Input';

import styles from './styles.module.scss';

export default function SignUp() {
	return (
		<div className={styles.signUpContainer}>
			<h1>Welcome. Sign up now!</h1>
			<p>Start planning your studies.</p>

			<Input
				name="name"
				title="Full Name"
				placeholder="Ex.: John Doe"
				type="text"
				icon="imagem"
			/>
		</div>
	);
}
