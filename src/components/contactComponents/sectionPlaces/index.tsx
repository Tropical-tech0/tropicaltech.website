import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//list of places
const places = [
    {
        cityName: "São Paulo",
        infoOne: "Avenida Angélica, Santa Cecília",
        infoTwo: "Brasil, SP, 01228-000",
        imgUrl: "/img/sao-paulo.jpg"
    },
    {
        cityName: "Rio de Janeiro",
        infoOne: "Rua México 12, Centro",
        infoTwo: "Brasil, RJ 20231-000",
        imgUrl: "/img/rio-de-janeiro.jpg"
    },
    {
        cityName: "Lisboa",
        infoOne: "Rua Cais de Santarem 32, Terreiro",
        infoTwo: "Portugal, Lisboa, 1100-030",
        imgUrl: "/img/lisboa.jpg"
    },
]

//entreprise's places - contact page
const SectionPlaces: React.FC = () => {

    const { t } = useTranslation()

    return (
        <section className={styles.places_section}>
            <div className={styles.header}>
                <h4>{t("titleCardPlaces")}</h4>
            </div>
            <div className={styles.cards}>
                {
                    places.map((place, index) => (
                        <div key={index} className={styles.card} style={{ backgroundImage: `url(${place.imgUrl})` }}>
                            <h4>{place.cityName}</h4>

                            <p>{place.infoOne}</p>
                            <p>{place.infoTwo}</p>

                            <div className={styles.background_filter}></div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SectionPlaces