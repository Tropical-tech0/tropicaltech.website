import React from "react";
import styles from "./index.module.css"

//components
import CardContactGreen from "@/components/cardContactGreen";

//services section - terceirizacao page
const SectionServices: React.FC = () => {

    return (
        <section className={styles.services_section}>
            <div className={styles.card_one}>
                <p>SERVIÇOS SOB MEDIDA</p>
                <h4>para sua organização</h4>
            </div>
            <CardContactGreen/>
            <div className={styles.card_three}>
                <span className={styles.content}>
                    <h4>NOMEAR O MELHOR TALENTO PARA CADA POSIÇÃO, É O QUE FAZEMOS</h4>
                    <p>
                        Estamos conversando com pessoas talentosas de Hong Kong ao Vale do Silício que podem fazer a diferença para 
                        você. Sabemos que em um mercado em rápida evolução como o de tecnologia, é ainda mais importante fornecer 
                        a você acesso rápido ao talento tecnológico certo, e trabalharemos com você como um verdadeiro parceiro 
                        para ajudar a garantir seu sucesso. profissional ou uma equipe totalmente nova, estamos prontos para ajudar.
                    </p>
                    <a href="https://wa.link/6vvx11">
                        Saiba mais
                    </a>
                </span>
            </div>
        </section>
    )

}

export default SectionServices