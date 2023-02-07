import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>TopRating</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} /></>;
}

export default MyApp;
