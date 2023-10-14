import '@/styles/globals.css';
import Head from 'next/head';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';


export default function App({ Component, pageProps }) {
  return (
    <>

    <Head>

      <title>Online Shoe Store | By Faraz Gul</title>
      <meta
      name='description'
      content='Nike Shoes'
      />

      <meta
      name='viewport'
      content='width= device-width, initial-scale=1'
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Urbanist:wght@100&display=swap" rel="stylesheet"/>


    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>

    </>
  
  )
}
