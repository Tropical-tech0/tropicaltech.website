import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//multi language system
import '../i18n/index'

//components
import SwitcherLanguage from '@/components/switcherLanguage'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <SwitcherLanguage/>
    <Component {...pageProps} />
    </>
  ) 
}
