import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import SectionApresentation from '@/components/homeComponents/sectionApresentation'
import SectionProjects from '@/components/homeComponents/sectionProjects'
import SectionMethods from '@/components/homeComponents/sectionMethods'
import SectionAbout from '@/components/homeComponents/sectionAbout'
import Footer from '@/components/footer'
import SwitcherLanguage from '@/components/switcherLanguage'

//home page
export default function Home() {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <meta name="description" content="Welcome to Tropical Tech, a software development company specializing in app and website development. Our team of developers, designers, and strategists are ready to transform your business. Contact us for more information." />
        <meta name="keywords" content="software development, app development, website development, Tropical Tech" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tropical Tech" />
        <link rel="canonical" href="https://tropical-tech.netlify.app/" />
        <title>Tropical Tech | {t("homeTagTitle")}</title>
      </Head>

      <Navbar />
      <main>
        <SectionApresentation />
        <SectionProjects />
        <SectionMethods />
        <SectionAbout />
      </main>

      <SwitcherLanguage/>
      <Footer />
    </>
  )
}
