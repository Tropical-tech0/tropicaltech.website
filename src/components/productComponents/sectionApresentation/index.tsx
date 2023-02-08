import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//apresentation section from product page
const SectionApresentation: React.FC = () => {

    const { i18n } = useTranslation()

    //titles for diferents languages
    const titleLanguages:any = {
        pt:
            <p>
                AQUI NA <strong>TROPICAL TECH</strong>, TEMOS COMO MISSÃO <strong>CRIAR PRODUTOS</strong> QUE AJUDARÃO VOCÊ A
                <strong>EXPANDIR SEUS NEGÓCIOS E CONQUISTAR MAIS CLIENTES</strong>.
                É POR ISSO QUE DESENVOLVEMOS ESTE <strong>CONJUNTO DE 5 FERRAMENTAS DE SOFTWARE PODEROSAS</strong>:
            </p>,
        en:
            <p>
                HERE AT <strong>TROPICAL TECH</strong>, OUR MISSION IS <strong>TO CREATE PRODUCTS</strong> THAT WILL HELP YOU
                <strong>EXPAND YOUR BUSINESS AND GET MORE CUSTOMERS</strong>.
                THIS IS WHY WE DEVELOPED THIS <strong>PACKAGE OF 5 POWERFUL SOFTWARE TOOLS</strong>:
            </p>,
        es:
            <p>
                AQUÍ EN <strong>TROPICAL TECH</strong>, NUESTRA MISIÓN ES <strong>CREAR PRODUCTOS</strong> QUE LE AYUDARÁN
                <strong>A EXPANDIR SU NEGOCIO Y CONSEGUIR MÁS CLIENTES</strong>.
                ES POR ESO QUE DESARROLLAMOS ESTE <strong>PAQUETE DE 5 POTENTES HERRAMIENTAS DE SOFTWARE</strong>:
            </p>,
        
    }

    return (
        <section className={styles.apresentation_section}>
            <div className={styles.background_content}></div>
            <div className={styles.apresentation_title}>
                {
                    titleLanguages[i18n.language]
                }
            </div>
            <div className={styles.scroll_icon}>
                <span className={styles.icon}>
                    <h4>SCROLL</h4>
                    <img src="/img/arrow.png" alt="arrow-bottom" />
                </span>
            </div>
        </section>
    )
}

export default SectionApresentation