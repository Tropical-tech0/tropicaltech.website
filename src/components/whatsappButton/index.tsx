import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//button link to contact whatsapp
const WhatsappButton = () => {
    const { t } = useTranslation()
    return (
        <a
            className={styles.whatsapp_button} href="https://wa.link/6vvx11"
            aria-label="Open WhatsApp chat"
        >
            <span className={styles.center}>
                <Image
                    src={"/img/icons-button/whatsapp.png"}
                    alt="whatsapp-icon"
                    width={14}
                    height={14}
                />
                <p>{t("buttonWelcome")}</p>
                <h6 style={{ fontSize: "16px" }}>&#128515;</h6>
            </span>
        </a>
    )
}

export default WhatsappButton