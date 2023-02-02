import React from 'react'
import styles from './index.module.css'

//cards info
import cards from './cardsInfo'

//products section - product page
const SectionProducts = () => {
    return (
        <section className={styles.products_section}>
            {
                cards.map((item, index: number) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.info} style={{order: (item.orderImg === '1' ? "2" : "1")}}>
                            <h4>{item.title}</h4>
                            <p>{item.descriptionTop}</p>
                            <span className={styles.features}>
                                <p>Seção de recursos:</p>
                                <ul>
                                    {
                                        item.features.map((feature: string, index:number) => (
                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </ul>
                            </span>
                            <p>{item.descriptionBottom}</p>
                        </div>
                        <div 
                            className={styles.img_card}
                            style={{
                                backgroundImage: `url(${item.imgUrl})`,
                                order: item.orderImg
                            }}
                        >

                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default SectionProducts