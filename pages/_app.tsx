import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

type NextContext = AppProps;

const NextApp: NextPage<NextContext> = (props) => {
  const { Component, pageProps } = props;


  return (
    <html>test</html>
  )
}

export default NextApp;
