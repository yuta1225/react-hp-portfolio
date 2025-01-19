 // グローバルCSSのインポート
import '../styles/index.scss';
import '../styles/App.scss';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
