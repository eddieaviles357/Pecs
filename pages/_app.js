import '../styles/globals.scss';
import Layout from '../components/Layout.js';
import {useEffect, useState} from 'react';

function MyApp({ Component, pageProps }) {  

  return (
    <div>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </div>
  )
};

export default MyApp;
