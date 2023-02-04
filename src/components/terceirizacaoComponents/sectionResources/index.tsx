import React from 'react'
import styles from './index.module.css'

type Resource = {
    content: string,
    imgUrl: string
}

const resources: Resource[] = [ 
    {
        content: "Computação em Nuvem",
        imgUrl: "/img/icons-list/cloud-computing.png"
    },
    {
        content: "Cyber segurança",
        imgUrl: "/img/icons-list/secure.png"
    },
    {
        content: "Dados e análises avançadas",
        imgUrl: "/img/icons-list/data-parser.png"
    },
    {
        content: "ERP e CRM",
        imgUrl: "/img/icons-list/crm.png"
    },
    {
        content: "Liderança",
        imgUrl: "/img/icons-list/people.png"
    },
    {
        content: "Gerenciamento de Projetos",
        imgUrl: "/img/icons-list/manager.png"
    },
    {
        content: "Salesforce e SAP",
        imgUrl: "/img/icons-list/sap.png"
    }, 
    {
        content: "Desenvolvimento de software",
        imgUrl: "/img/icons-list/software.png"
    }
]

//card li
const ResourceCard = ({data}: {data: {content: string, imgUrl: string}}) => (
    <span className={styles.card}>
        <img src={data.imgUrl} alt={data.content} />
        <p>{data.content}</p>
    </span>
)

//resources section - terceirizacao page
const SectionResources: React.FC = () => {
  return (
    <section className={styles.resources_section}>
        <div className={styles.header}>
            <h4>Conheça nossos recursos</h4>
        </div>
        <div className={styles.resources}>
            {
                resources.map((resource: Resource, index: number) => (
                    <div key={index}>
                        <ResourceCard data={resource}/>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default SectionResources