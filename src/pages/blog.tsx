import React from 'react'
import Head from 'next/head'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionApresentation from '@/components/blogComponents/sectionApresentation'
import SectionPosts from '@/components/blogComponents/sectionPosts'

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog - Tropical Tech</title>
      </Head>
      <Navbar/>
      <main>
        <SectionApresentation/>
        <SectionPosts/>
      </main>
      <Footer/>
    </>
  )
}

export default Blog