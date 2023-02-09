import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionApresentation from '@/components/productComponents/sectionApresentation'
import SectionProducts from '@/components/productComponents/sectionProducts'

const Product = () => {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("productTagTitle")} - Tropical Tech</title>
      </Head>
      <Navbar />

      <main>
        <SectionApresentation/>
        <SectionProducts/>
      </main>

      <Footer />
    </>
  )
}

export default Product