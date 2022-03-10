// import type { GetStaticProps } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.scss';

// import { api } from '@study-guide/axios';
import { Header } from '../components/Header';

interface HomeProps {
	helloWorld: string;
}

export default function Home({ helloWorld }: HomeProps) {
	return (
		<>
			<Header />
			{/* <h1>{helloWorld}</h1> */}
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
