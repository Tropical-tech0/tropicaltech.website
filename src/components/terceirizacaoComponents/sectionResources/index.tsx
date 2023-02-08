import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

type Resource = {
    content: string,
    imgUrl: string,
    translateKey: string
}

const resources: Resource[] = [
    {
        content: "Computação em Nuvem",
        imgUrl: "/img/icons-list/cloud-computing.png",
        translateKey: "resourceTerceirizacao1"
    },
    {
        content: "Cyber segurança",
        imgUrl: "/img/icons-list/secure.png",
        translateKey: "resourceTerceirizacao2"
    },
    {
        content: "Dados e análises avançadas",
        imgUrl: "/img/icons-list/data-parser.png",
        translateKey: "resourceTerceirizacao3"
    },
    {
        content: "ERP e CRM",
        imgUrl: "/img/icons-list/crm.png",
        translateKey: "resourceTerceirizacao4"
    },
    {
        content: "Liderança",
        imgUrl: "/img/icons-list/people.png",
        translateKey: "resourceTerceirizacao5"
    },
    {
        content: "Gerenciamento de Projetos",
        imgUrl: "/img/icons-list/manager.png",
        translateKey: "resourceTerceirizacao6"
    },
    {
        content: "Salesforce e SAP",
        imgUrl: "/img/icons-list/sap.png",
        translateKey: "resourceTerceirizacao7"
    },
    {
        content: "Desenvolvimento de software",
        imgUrl: "/img/icons-list/software.png",
        translateKey: "resourceTerceirizacao8"
    }
]

//card li
const ResourceCard = ({ data }: {data: Resource}) => {

    const { t } = useTranslation()

    return(
        <span className={styles.card}>
            <img src={data.imgUrl} alt={data.content} />
            <p>{t(data.translateKey)}</p>
        </span>
    )
}

//resources section - terceirizacao page
const SectionResources: React.FC = () => {

    const { t } = useTranslation()

    return (
        <section className={styles.resources_section}>
            <div className={styles.header}>
                <h4>{t("resourcesTitle")}</h4>
            </div>
            <div className={styles.resources}>
                {
                    resources.map((resource: Resource, index: number) => (
                        <div key={index}>
                            <ResourceCard data={resource} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SectionResources