import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./index.module.css"

type Language = {
  title: string,
  value: string,
  flag: string
}

const languages: Language[] = [
  {
    title: "Portuguese",
    value: "pt",
    flag: "/img/flags/br.svg"
  },
  {
    title: "English",
    value: "en",
    flag: "/img/flags/us.svg"
  },
  {
    title: "Español",
    value: "es",
    flag: "/img/flags/es.svg"
  },

]

//switcher card - select language
const SwitcherLanguage: React.FC = () => {

  const [activeCard, setActiveCard] = React.useState<boolean>(false)
  const [languageSelected, setLanguageSelected] = React.useState<Language | null>(null)
  const { t, i18n } = useTranslation()

  React.useEffect(() => {
    checkLanguageSelected()
  }, [i18n])
  
  //check the selected language
  const checkLanguageSelected = () => {
    languages.forEach(language => {

      language.value === i18n.language && setLanguageSelected(language)

    })
  }

  return (
    <div className={(activeCard && styles.active) + " " + styles.container}>
      <div className={styles.header} onClick={() => setActiveCard(!activeCard)}>
        <div className={styles.selected_country}>
          <img src={languageSelected?.flag} />
          <h4>{languageSelected?.title}</h4>
        </div>
        <span
          className={styles.arrow}
          style={activeCard ? { transform: "rotate(180deg)" } : { transform: "inherit" }}
        >
          <img src="/img/arrow-down.svg" alt="arrow-down" />
        </span>
      </div>
      <div className={styles.body}>
        {
          languages.map((language: Language, index: number) => (
            <span
              className={(languageSelected?.value === language.value && styles.selected) + " " + styles.language_card}
              onClick={() => [i18n.changeLanguage(language.value), checkLanguageSelected()]}
              key={index}
            >
              <img src={language.flag} alt={language.title} />
              <p>{language.title}</p>
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default SwitcherLanguage