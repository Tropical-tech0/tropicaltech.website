import React from 'react'
import styles from './index.module.css'

type Info = {
    city: string,
    street: string,
    district: string,
    country: string,
    cep: string
}

//info footer
const info: Info[] = [
    {
        city: "RIO DE JANEIRO",
        street: "Rua Mexico 12,",
        district: "Centro,",
        country: "Brasil, RJ,",
        cep: "20231-000"
    },
    {
        city: "LISBOA",
        street: "Rua Cais de Santarem 32,",
        district: "Terreiro do Paço,",
        country: "Portugal, Lisboa,",
        cep: "1100-030"
    },
    {
        city: "SÃO PAULO",
        street: "Avenida Angelica 672,",
        district: "Santa Cecilia,",
        country: "Brasil, SP,",
        cep: "01228-000"
    },

]

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer_component}>
            <div className={styles.img_card}>
                <img src="/img/logo-footer.png" alt="logo-footer" />
            </div>
            <div className={styles.cards}>
                {
                    info.map((item: Info, index: number) => (
                        <span key={index} className={styles.info_card}>
                            <h4>{item.city}</h4>
                            <div>
                                <p>{item.street}</p>
                                <p>{item.district}</p>
                                <p>{item.country}</p>
                                <p>{item.cep}</p>
                            </div>
                        </span>
                    ))
                }
            </div>
            <div className={styles.__line__}></div>
        </footer>
    )
}

export default Footer