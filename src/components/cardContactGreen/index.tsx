import React from "react";
import styles from './index.module.css'

const CardContactGreen: React.FC = () => {

    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                <span className={styles.logo}>
                    <img src="/img/icon-business.png" alt="icon-business" />
                    <h4>PARA QUALQUER TIPO DE NEGÓCIO</h4>
                </span>
                <p>
                    Seja qual for o seu tamanho, escala ou setor, nós atendemos. Seja sua organização uma Start-Up,
                    Scale-up ou Empresa em Fintech, Edtech, Martech ou em Serviços Públicos - nossa profunda experiência está
                    alinhada a todos os setores e tecnologias, permitindo-nos apoiá-lo para impulsionar maior crescimento,
                    eficiência e sucesso.
                </p>
            </div>
            <div className={styles.card_bottom}>
                <h4>TEMOS A SOLUÇÃO</h4>
                <span>
                    <p>Negócios Empresariais</p>
                    <p>Ampliação do Time</p>
                    <p>Setor Público e Privado</p>
                </span>
                <a href="https://wa.link/6vvx11">
                    CONFIRA!
                </a>
            </div>
        </div>
    )

}

export default CardContactGreen