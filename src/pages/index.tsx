import Head from 'next/head'
import styles from '../styles/home.module.css'

//components
import Navbar from '@/components/navbar'
import SectionApresentation from '@/components/homeComponents/sectionApresentation'
import SectionProjects from '@/components/homeComponents/sectionProjects'
import SectionMethods from '@/components/homeComponents/sectionMethods'
import SectionAbout from '@/components/homeComponents/sectionAbout'
import Footer from '@/components/footer'

//home page
export default function Home() {
  return (
    <>
      <Head>
        <title>Tropical Tech</title>
        <meta name="description" content="Welcome to Tropical Tech, a software development company with a team of developers, designers, and strategists ready to transform your business. Contact us for more information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="software development, app development, website development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tropical Tech" />
      </Head>

      <Navbar />
      <main>
        <SectionApresentation />
        <SectionProjects />
        <SectionMethods />
        <SectionAbout />
      </main>
      <Footer />
    </>
  )
}
