import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//apresentation section - terceirizacao page
const SectionApresentation: React.FC = () => {

    const { t } = useTranslation()

    return (
        <section className={styles.apresentation_section}>
            <div className={styles.background_content}></div>
            <div className={styles.title}>
                <h4>{t("apresentationTitleTerceirizacao")}</h4>
            </div>
            <div className={styles.informations}>
                <span>
                    <p>
                        {t("apresentationTerceirizacaoTop")}
                    </p>
                </span>
                <div className={styles.img_card}>

                </div>
                <div className={styles.bottom_info}>
                    <h4>{t("apresentationDescriptionTitle")}</h4>
                    <p>
                        {t("apresentationDescriptionText")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SectionApresentation