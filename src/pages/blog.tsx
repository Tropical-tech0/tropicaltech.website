import React from 'react'
import Head from 'next/head'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog - Tropical Tech</title>
      </Head>
      <Navbar/>
      <main>

      </main>
      <Footer/>
    </>
  )
}

export default Blog