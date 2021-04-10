import Head from 'next/head'
import '../styles/globals.css'
import { LoadingProvider } from '../contexts/LoadingContext'
import { SubmitResponseProvider } from '../contexts/SubmitResponseContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Form App Masters</title>
      </Head>
      <LoadingProvider>
        <SubmitResponseProvider>
          <Component {...pageProps} />
        </SubmitResponseProvider>
      </LoadingProvider>
    </>
  )
}

export default MyApp
