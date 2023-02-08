import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//components
import WritingComponent from '@/components/writingComponent'

type IMethod = {
  icon: JSX.Element,
  title: string,
  description: string, 
  translateKeyTitle: string,
  translateKeyContent: string
}

const methods: IMethod[] = [
  {
    icon: <img src='/img/pencil.png' alt='pencil-icon'></img>,
    title: "ESTRATÉGIA",
    description: "Trabalhamos com você para entender o problema que você está tentando resolver e a solução do produto digital para esse problema. Isso envolve muita pesquisa e testes iterativos de usuários.",
    translateKeyTitle: "methodOneTitle",
    translateKeyContent: "methodOneContent"
  },
  {
    icon: <img src="/img/share.png" alt="share-icon" />,
    title: "PROJETO E TESTE",
    description: "Com base nos insights obtidos, você trabalhará em estreita colaboração com nossa equipe de desenvolvimento para criar um design elegante que incorpore as melhores práticas e tendências de UI/UX. E testes de usuário.",
    translateKeyTitle: "methodTwoTitle",
    translateKeyContent: "methodTwoContent"
  },
  {
    icon: <img src="/img/code.png" alt="code-icon" />,
    title: "DESENVOLVIMENTO",
    description: "Com nossa metodologia ágil baseada em scrum, você receberá compilações iterativas a cada duas semanas, dando a você bastante tempo para testá-las e fazer ajustes.",
    translateKeyTitle: "methodThreeTitle",
    translateKeyContent: "methodThreeContent"
  }
]

//section into enterprise methods
const SectionMethods: React.FC = () => {

  const { t } = useTranslation()

  const words = [
    "TESTES INTENSIVOS",
    "DESENVOLVIMENTO ÁGIL",
    "ESTRATÉGIA DE PRODUTO",
    "SEGURANÇA"
  ]

  return (
    <section className={styles.methods_section}>
      <div className={styles.header}>
        <h4>{t("methodTitle")}</h4>
        <WritingComponent words={words}/>
      </div>
      <div className={styles.method_cards}>

        {
          methods.map((method: IMethod, index: number) => (
            <div key={index} className={styles.card}>
              <span>
                {method.icon}
              </span>
              <span>
                <h4>{t(method.translateKeyTitle)}</h4>
                <p>{t(method.translateKeyContent)}</p>
              </span>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default SectionMethods