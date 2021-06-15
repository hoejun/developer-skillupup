import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/App.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      {/* <React.Suspense fallback={<div>Loading.....</div>}> */}
      {/* <React.Suspense fallback={null}> */}
      <Component {...pageProps} />
      {/* </React.Suspense> */}
    </RecoilRoot>
  );
};

export default MyApp;
