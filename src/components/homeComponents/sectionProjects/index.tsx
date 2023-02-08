import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

type IProject = {
  url: string,
  title: string,
  description: string,
  translateKey: string
}

//projects data
const projects: IProject[] = [
  {
    url: '/img/projects/img-kokua.png', 
    title: "Kokua - ", 
    description: "Aplicativo Voltado Para O Setor Turístico.",
    translateKey: "projectKokua"
  },
  {
    url: '/img/projects/vets-now.png', 
    title: "Vetsnow - ", 
    description: "Loja Veterinária Web E Mobile Voltada Para A Área Veterinária.",
    translateKey: "projectVetsnow"
  },
  {
    url: '/img/projects/uhr.png', 
    title: "UHR - ", 
    description: "Aplicativo Voltado Para O Setor Hoteleiro.",
    translateKey: "projectUhr"
  },
  {
    url: '/img/projects/find-connection.png', 
    title: "Find Connection - ", 
    description: "App Voltado Para Social E Namoro.",
    translateKey: "projectFindconnection"
  },
]

//projects section - home page
const SectionProjects: React.FC = () => {

  const { t } = useTranslation()

  return (
    <section className={styles.projects_section}>
      <div className={styles.header}>
        <h4>{t("projectsTitle")}</h4>
        <p>{t("projectsSubtitle")}</p>
      </div>
      <div className={styles.projects}>
        {
          projects.map((project: IProject, index:number) => (
            <span key={index}>
              <div className={styles.card_img} 
                style={{
                  backgroundImage: `url(${project.url})`
                }}
              >
                {/* <img src={project.url} alt={project.title} /> */}
              </div>
              <div className={styles.description}>
                <strong>{project.title}</strong>
                {t(project.translateKey)}
              </div>
            </span>
          ))
        }
      </div>
    </section>
  )
}

export default SectionProjects