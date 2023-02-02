import React from 'react'
import styles from './index.module.css'

//apresentation section from product page
const SectionApresentation: React.FC = () => {
    return (
        <section className={styles.apresentation_section}>
            <div className={styles.background_content}></div>
            <div className={styles.apresentation_title}>
                <p>
                    AQUI NA <strong>TROPICAL TECH</strong>, TEMOS COMO MISSÃO <strong>CRIAR PRODUTOS</strong> QUE AJUDARÃO VOCÊ A
                    <strong>EXPANDIR SEUS NEGÓCIOS E CONQUISTAR MAIS CLIENTES</strong>.
                    É POR ISSO QUE DESENVOLVEMOS ESTE <strong>CONJUNTO DE 5 FERRAMENTAS DE SOFTWARE PODEROSAS</strong>:
                </p>
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