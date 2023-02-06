import React from 'react'
import Head from 'next/head'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionContact from '@/components/contactComponents/sectionContact'

const Contact: React.FC = () => {
  return (
    <>
    <Head>
      <title>Contato - Tropical Tech</title>
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