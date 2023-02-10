import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionApresentation from '@/components/blogComponents/sectionApresentation'
import SectionPosts from '@/components/blogComponents/sectionPosts'

const Blog: React.FC = () => {
 
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("blogTagTitle")} - Tropical Tech</title>
        <meta name="description" content="Stay up to date with the latest news on software solutions and technology at Tropical Tech. Read our thoughts and ideas on the world of technology." />
        <meta name="keywords" content="technology, software solutions, blog, news, Tropical Tech" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tropical-tech.netlify.app/blog" />
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