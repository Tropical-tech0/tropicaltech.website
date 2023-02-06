import React from 'react'
import Head from 'next/head'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionApresentation from '@/components/terceirizacaoComponents/sectionApresentation'
import SectionResources from '@/components/terceirizacaoComponents/sectionResources'
import SectionServices from '@/components/terceirizacaoComponents/sectionServices'
import SectionCarousel from '@/components/terceirizacaoComponents/sectionCarousel'

const Terceirizacao = () => {
  return (
    <>
    <Head>
      <title>Sobre - Tropical Tech</title>
    </Head>
    <Navbar/>
    <main>

      <SectionApresentation/>
      <SectionResources/>
      <SectionServices/>
      <SectionCarousel/>

    </main>
    <Footer/>
    </>
  )
}

export default Terceirizacao