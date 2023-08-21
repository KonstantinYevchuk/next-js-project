import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <Layout>
    <main>
  <Component {...pageProps} />
  </main>
  </Layout>
)
  

export default App
