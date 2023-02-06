import React from 'react'
import styles from './index.module.css'

//components
import Carousel from '@/components/carousel'

//data carousels
import dataCarousels from './carouselsData'

//carousel section - terceirizacao page
const SectionCarousel: React.FC = () => {
  return (
    <section className={styles.carousel_section}>
      <span className={styles.header}>
        <h4>TECNOLOGIAS</h4>
      </span>
      <div className={styles.carousels}>
        <div className={styles.carousel}>
          <h4>COMPUTAÇÃO EM NUVEM</h4>
          <Carousel cards={dataCarousels['cloudComputing']}/>
        </div>
        <div className={styles.carousel}>
          <h4>BANCO DE DADOS</h4>
          <Carousel cards={dataCarousels['databases']}/>
        </div>
        <div className={styles.carousel}>
          <h4>INTEGRAÇÕES</h4>
          <Carousel cards={dataCarousels['integrations']}/>
        </div>
        <div className={styles.carousel}>
          <h4>TECNOLOGIAS MOBILE</h4>
          <Carousel cards={dataCarousels['mobileTechnologies']}/>
        </div>
        <div className={styles.carousel}>
          <h4>LINGUAGENS DE PROGRAMAÇÃO</h4>
          <Carousel cards={dataCarousels['programmingLanguages']}/>
        </div>
      </div>
    </section>
  )
}

export default SectionCarousel