import type { GetStaticProps, NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.scss';

import { api } from '@study-guide/axios';

interface HomeProps {
	helloWorld: string;
}

export default function Home({ helloWorld }: HomeProps) {
	return <h1>{helloWorld}</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await api.get('/');

	return {
		props: {
			helloWorld: response.data
		}
	};
};
