import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

//button link to contact whatsapp
const WhatsappButton = () => {
    return (
        <a
            className={styles.whatsapp_button} href="https://wa.link/6vvx11"
            aria-label="Open WhatsApp chat"
        >
            <span>
                <Image
                    src={"/img/icons-button/whatsapp.png"}
                    alt="whatsapp-icon"
                    width={14}
                    height={14}
                />
                <p>ENTRE EM CONTATO!</p>
                <h6 style={{ fontSize: "16px" }}>&#128515;</h6>
            </span>
        </a>
    )
}

export default WhatsappButton