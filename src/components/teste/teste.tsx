import React from 'react'
import styles from './index.module.css'

const Teste: React.FC = () => {
  return (
    <div className={styles.contact_card}>
        <div className={styles.img_card}>
        
        </div>
        <div className={styles.info_card}>
            <h4>FAÇA PARCERIA COM UMA AGÊNCIA DE DESENVOLVIMENTO DE APLICATIVOS OUSADA.</h4>
            <p>Como os principais desenvolvedores de aplicativos do Brasil, fazemos parcerias com empresas e empreendedores ambiciosos em todo o mundo. Vamos discutir sua ideia de desenvolvimento de produto ou aplicativo digital para que possamos torná-la realidade.</p>
            <a href='https://wa.link/6vvx11'>
                Entrar em contato
            </a>
        </div>
    </div>
  )
}

export default Teste