import React from 'react'
import Head from 'next/head'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionApresentation from '@/components/productComponents/sectionApresentation'
import SectionProducts from '@/components/productComponents/sectionProducts'

const Product = () => {
  return (
    <>
      <Head>
        <title>Produtos - Tropical Tech</title>
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