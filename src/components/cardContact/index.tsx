import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//card contact - home page
const CardContact: React.FC = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.contact_card}>
        <div className={styles.img_card}>
        
        </div>
        <div className={styles.info_card}>
            <h4>{t("contactTitle")}.</h4>
            <p>{t("contactDescription")}</p>
            <a href='https://wa.link/6vvx11'>
              {t("contactButton")}
            </a>
        </div>
    </div>
  )
}

export default CardContact