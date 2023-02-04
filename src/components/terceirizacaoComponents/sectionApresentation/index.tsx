import React from 'react'
import styles from './index.module.css'

//apresentation section - terceirizacao page
const SectionApresentation: React.FC = () => {
  return (
    <section className={styles.apresentation_section}>
        <div className={styles.background_content}></div>
        <div className={styles.title}>
            <h4>OS MELHORES DESENVOLVEDORES ALOCADOS EM SUA EMPRESA</h4>
        </div>
        <div className={styles.informations}>
            <span>
                <p> 
                    A terceirização tem sido uma prática popular para empresas que buscam economizar dinheiro e fazer o melhor trabalho. 
                    Mas, com o surgimento da inteligência artificial, há uma nova maneira de as empresas terceirizarem seu trabalho. 
                    A inteligência artificial está nos ajudando a escolher o melhor profissional para cada cargo.
                </p>
            </span>
            <div className={styles.img_card}>

            </div>
            <div className={styles.bottom_info}>
                <h4>TALENTOS MOLDANDO O FUTURO GLOBAL DA TECNOLOGIA</h4>
                <p>
                    Somos um player global, com uma rede de talentos em tecnologia que abrange 33 países, incluindo potências como Reino Unido, 
                    EUA, Austrália e Alemanha, além de muitos mercados emergentes. Já estamos conversando com os melhores profissionais da sua área, 
                    então, quaisquer que sejam as habilidades de especialistas em tecnologia de que sua empresa precisa, nós o atendemos. 
                    Aqui estão algumas das áreas que cobrimos, que podem diferir dependendo da sua localização.
                </p>
            </div>
        </div>
    </section>
  )
}

export default SectionApresentation