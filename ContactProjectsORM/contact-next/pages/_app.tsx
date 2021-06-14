import { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/App.css';
// import './config/i18n';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      {/* <React.Suspense fallback={<div>Loading.....</div>}> */}
      <Component {...pageProps} />
      {/* </React.Suspense> */}
    </RecoilRoot>
  );
};

export default MyApp;
