import React, { useState, useEffect } from 'react'
import styles from './index.module.css'

//components
import WritingComponent from '@/components/writingComponent'

type IMethod = {
  icon: JSX.Element,
  title: string,
  description: string
}

const methods: IMethod[] = [
  {
    icon: <img src='/img/pencil.png' alt='pencil-icon'></img>,
    title: "ESTRATÉGIA",
    description: "Trabalhamos com você para entender o problema que você está tentando resolver e a solução do produto digital para esse problema. Isso envolve muita pesquisa e testes iterativos de usuários."
  },
  {
    icon: <img src="/img/share.png" alt="share-icon" />,
    title: "PROJETO E TESTE",
    description: "Com base nos insights obtidos, você trabalhará em estreita colaboração com nossa equipe de desenvolvimento para criar um design elegante que incorpore as melhores práticas e tendências de UI/UX. E testes de usuário."
  },
  {
    icon: <img src="/img/code.png" alt="code-icon" />,
    title: "DESENVOLVIMENTO",
    description: "Com nossa metodologia ágil baseada em scrum, você receberá compilações iterativas a cada duas semanas, dando a você bastante tempo para testá-las e fazer ajustes."
  }
]

//section into enterprise methods
const SectionMethods: React.FC = () => {

  const words = [
    "TESTES INTENSIVOS",
    "DESENVOLVIMENTO ÁGIL",
    "ESTRATÉGIA DE PRODUTO",
    "SEGURANÇA"
  ]

  return (
    <section className={styles.methods_section}>
      <div className={styles.header}>
        <h4>DO DESIGN SIMPLES AOS APLICATIVOS TOTALMENTE DESENVOLVIDOS COM</h4>
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
                <h4>{method.title}</h4>
                <p>{method.description}</p>
              </span>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default SectionMethods