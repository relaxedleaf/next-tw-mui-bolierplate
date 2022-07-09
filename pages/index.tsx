import { Alert, Button, Stack } from '@mui/material';

import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Boilerplate</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Stack sx={{ width: '100%' }} spacing={2}>
				<Alert onClose={() => {}}>
					This is a success alert —{' '}
					<span className='underline decoration-sky-500'>
						check it out!
					</span>
				</Alert>
				<Alert
					action={
						<Button color='inherit' size='small'>
							UNDO
						</Button>
					}
				>
					This is a success alert — check it out!
				</Alert>
			</Stack>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>{' '}
					integrated with <a href='https://mui.com/'>Material-UI!</a>
				</h1>
				<p className='underline decoration-sky-500 red'>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>
			</main>
		</div>
	);
};
export default Home;
