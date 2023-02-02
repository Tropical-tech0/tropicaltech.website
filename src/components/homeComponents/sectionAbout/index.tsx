import React from 'react'
import styles from './index.module.css'

//components
import CardContact from '@/components/cardContact'
import Teste from '@/components/teste/teste'

type ICard = {
    imgUrl: string,
    title: string,
    description: string
}

//info cards
const cards: ICard[] = [
    {
        imgUrl: "/img/people/mike-gayed.png",
        title: "FUNDADOR E CEO @ HOWUDISH",
        description: '“A Tropical Tech se destaca como parceira comprometida e dedicada, oferecendo uma educação e colaboração completa. A empresa investe no sucesso do projeto, não se limitando apenas a um salário, mas sim aplicando empenho e dedicação em seu trabalho junto aos clientes.”'
    },
    {
        imgUrl: "/img/people/ashlin.png",
        title: "QUIN OCAMPO",
        description: '“A Tropical Tech e sua equipe desenvolveram um aplicativo excepcional que aumentou em oito vezes o uso de nossas ferramentas. Tudo na primeira semana de seu lançamento, o aplicativo ficou em segundo lugar em aplicativos de notícias no iTunes, só temos a agradecer.”'
    },
    {
        imgUrl: "/img/people/jeff-lyman.png",
        title: "JEFFERSON LYMAN",
        description: '“Além de entregar um produto de primeira qualidade, a Tropical Tech é muito proativa e organizada na gestão de projetos. Além do desenvolvimento de software, eles forneceram um suporte inestimável ao desenvolvimento de negócios - uma surpresa bem-vinda de um fornecedor em seu setor.”'
    },
]

//about us section
const SectionAbout: React.FC = () => {
    return (
        <section className={styles.about_section}>
            <div className={styles.header}>
                <p>O QUE NOSSOS CLIENTES DIZEM</p>
                <h4>SOBRE NÓS</h4>
            </div>
            <div className={styles.about_cards}>

                {
                    cards.map((card: ICard, index: number) => (
                        <div key={index} className={styles.card}>
                            <div>
                                <p>{card.description}</p>
                            </div>
                            <span className={styles.card_info}>
                                <img src={card.imgUrl} alt={card.imgUrl.split('/').pop()} />
                                <h5>{card.title}</h5>
                            </span>
                        </div>
                    ))
                }

            </div>

            <div className={styles.card_contact}>
                
                <CardContact/>
                {/* <Teste/> */}
            </div>


        </section>
    )
}

export default SectionAbout