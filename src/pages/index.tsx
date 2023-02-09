import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import SectionApresentation from '@/components/homeComponents/sectionApresentation'
import SectionProjects from '@/components/homeComponents/sectionProjects'
import SectionMethods from '@/components/homeComponents/sectionMethods'
import SectionAbout from '@/components/homeComponents/sectionAbout'
import Footer from '@/components/footer'

//home page
export default function Home() {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <meta name="description" content="Welcome to Tropical Tech, a software development company with a team of developers, designers, and strategists ready to transform your business. Contact us for more information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="software development, app development, website development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tropical Tech" />
        <title>Tropical Tech | {t("homeTagTitle")}</title>
      </Head>

      <Navbar />
      <main>
        <SectionApresentation />
        <SectionProjects />
        <SectionMethods />
        <SectionAbout />
      </main>
      <Footer />
    </>
  )
}
