import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//multi language system
import '../i18n/index'

//auth admin provider
import AuthAdminProvider from '@/contexts/authAdmin'

//components
import SwitcherLanguage from '@/components/switcherLanguage'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AuthAdminProvider>
      <>
        <SwitcherLanguage/>
        <Component {...pageProps} />
      </>
    </AuthAdminProvider>
  ) 
}
