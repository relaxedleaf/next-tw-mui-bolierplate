import '../styles/globals.scss';

import * as React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';

import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../src/createEmotionCache';
import store from '../src/store';
import theme from '../src/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</ThemeProvider>
		</CacheProvider>
	);
}
