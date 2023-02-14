import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectionApresentation from '@/components/blogComponents/sectionApresentation'
import SectionPosts from '@/components/blogComponents/sectionPosts'

//api
import Api from '@/services/api'

//all posts
export async function getStaticProps(){

  var response: any = []

  try {
    response = await Api.get('/read-posts')
  } catch (error) {
    response = {data:{posts: []}}
  }

  return{
    props:{
      dataPosts: response.data.posts
    }
  }

}


const Blog: React.FC<any> = ({ dataPosts }) => {
 
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
        <SectionPosts dataPosts={dataPosts}/>
      </main>
      <Footer/>
    </>
  )
}

export default Blog