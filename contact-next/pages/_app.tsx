// import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import '../styles/App.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
