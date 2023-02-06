import React from 'react'
import styles from './index.module.css'

type IProject = {
  url: string,
  title: string,
  description: string
}

//projects data
const projects: IProject[] = [
  {
    url: '/img/projects/img-kokua.png', 
    title: "Kokua - ", 
    description: "Aplicativo Voltado Para O Setor Turístico."
  },
  {
    url: '/img/projects/vets-now.png', 
    title: "Vetsnow - ", 
    description: "Loja Veterinária Web E Mobile Voltada Para A Área Veterinária."
  },
  {
    url: '/img/projects/uhr.png', 
    title: "UHR - ", 
    description: "Aplicativo Voltado Para O Setor Hoteleiro."
  },
  {
    url: '/img/projects/find-connection.png', 
    title: "Find Connection - ", 
    description: "App Voltado Para Social E Namoro."
  },
]

//projects section - home page
const SectionProjects: React.FC = () => {
  return (
    <section className={styles.projects_section}>
      <div className={styles.header}>
        <h4>CONSTRUA E TRANSFORME SEUS NEGÓCIOS POR MEIO DE ESTRATÉGIA, DESIGN E DESENVOLVIMENTO DE APLICATIVOS WEB E MOBILE</h4>
        <p>Veja alguns de nossos projetos</p>
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
                {project.description}
              </div>
            </span>
          ))
        }
      </div>
    </section>
  )
}

export default SectionProjects