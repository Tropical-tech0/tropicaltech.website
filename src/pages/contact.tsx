import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionContact from '@/components/contactComponents/sectionContact'
import SectionPlaces from '@/components/contactComponents/sectionPlaces'

const Contact: React.FC = () => {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <meta name="description" content="Get in touch with Tropical Tech, the software development company that can help bring your business to the next level. Contact us for more information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="contact, tropical tech, software development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tropical Tech" />
        <title>{t("contactTagTitle")} - Tropical Tech</title>
      </Head>
      <Navbar />
      <main>
        <SectionContact />
        <SectionPlaces/>
      </main>
      <Footer />
    </>
  )
}

export default Contact