import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//cards info
import cards from './cardsInfo'

//products section - product page
const SectionProducts = () => {

    const { t } = useTranslation()

    return (
        <section className={styles.products_section}>
            {
                cards.map((item, index: number) => (
                    <div className={styles.card} key={index}>
                        <div 
                            className={styles.img_card}
                            style={{
                                backgroundImage: `url(${item.imgUrl})`,
                                order: item.orderImg
                            }}
                        >

                        </div>
                        <div className={styles.info} style={{order: (item.orderImg === '1' ? "2" : "1")}}>
                            <h4>{t(item.title)}</h4>
                            <p>{t(item.descriptionTop)}</p>
                            <span className={styles.features}>
                                <p>{t("resourcesSection")}</p>
                                <ul>
                                    {
                                        item.features.map((feature: string, index:number) => (
                                            <li key={index}>{t(feature)}</li>
                                        ))
                                    }
                                </ul>
                            </span>
                            <p>{t(item.descriptionBottom)}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default SectionProducts