import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Footer } from '@components';

type NextContext = AppProps;

const NextApp: NextPage<NextContext> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Component />
      <Footer />
    </>
  );
};

export default NextApp;
