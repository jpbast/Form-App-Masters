import GlobalStyles from '../styles/global'

import Head from 'next/head'
import { AppProps } from 'next/app'

import { LoadingProvider } from '../contexts/LoadingContext'
import { SubmitResponseProvider } from '../contexts/SubmitResponseContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Form App Masters</title>
      </Head>
      <LoadingProvider>
        <SubmitResponseProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </SubmitResponseProvider>
      </LoadingProvider>
    </>
  )
}

export default MyApp
