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
        <meta name="description" content="Tropical Tech provides innovative solutions for software development using the latest technologies. Discover our methods and products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="software development, methods, products" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tropical Tech" />
        <title>{t("productTagTitle")} - Tropical Tech</title>
      </Head>
      <Navbar />

      <main>
        <SectionApresentation />
        <SectionProducts />
      </main>

      <Footer />
    </>
  )
}

export default Product