import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionContact from '@/components/contactComponents/sectionContact'

const Contact: React.FC = () => {
  
  const { t } = useTranslation()
  
  return (
    <>
    <Head>
      <title>{t("contactTagTitle")} - Tropical Tech</title>
    </Head>
    <Navbar/>
    <main>
      <SectionContact/>
    </main>
    <Footer/>
    </>
  )
}

export default Contact