import React from "react";
// グローバルCSSのインポート
import '../styles/index.scss';
import '../styles/App.scss';
import Layout from '../components/Layout'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
