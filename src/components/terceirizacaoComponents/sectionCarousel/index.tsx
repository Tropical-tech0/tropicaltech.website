import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//components
import Carousel from '@/components/carousel'

//data carousels
import dataCarousels from './carouselsData'

//carousel section - terceirizacao page
const SectionCarousel: React.FC = () => {

  const { t } = useTranslation()

  return (
    <section className={styles.carousel_section}>
      <span className={styles.header}>
        <h4>{t("carouselTitle")}</h4>
      </span>
      <div className={styles.carousels}>
        <div className={styles.carousel}>
          <h4>{t("carouselOneTitle")}</h4>
          <Carousel cards={dataCarousels['cloudComputing']}/>
        </div>
        <div className={styles.carousel}>
          <h4>{t("carouselTwoTitle")}</h4>
          <Carousel cards={dataCarousels['databases']}/>
        </div>
        <div className={styles.carousel}>
          <h4>{t("carouselThreeTitle")}</h4>
          <Carousel cards={dataCarousels['integrations']}/>
        </div>
        <div className={styles.carousel}>
          <h4>{t("carouselFourTitle")}</h4>
          <Carousel cards={dataCarousels['mobileTechnologies']}/>
        </div>
        <div className={styles.carousel}>
          <h4>{t("carouselFiveTitle")}</h4>
          <Carousel cards={dataCarousels['programmingLanguages']}/>
        </div>
      </div>
    </section>
  )
}

export default SectionCarousel