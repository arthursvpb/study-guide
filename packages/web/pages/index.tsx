/* eslint-disable @next/next/no-img-element */
// import type { GetStaticProps } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';

// import { api } from '@study-guide/axios';
import { GetStartedButton } from '../components/GetStartedButton';

import styles from './home.module.scss';

interface HomeProps {
	helloWorld: string;
}

export default function Home({ helloWorld }: HomeProps) {
	return (
		<>
			<main className={styles.contentContainer}>
				<img src="/images/undraw_certification_aif8.svg" alt="Girl certified" />

				<section className={styles.hero}>
					<h1>
						The study organizer for your <span>mind</span>.
					</h1>

					<GetStartedButton />
				</section>
			</main>
		</>
	);
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const response = await api.get('/');

// 	return {
// 		props: {
// 			helloWorld: response.data
// 		}
// 	};
// };
