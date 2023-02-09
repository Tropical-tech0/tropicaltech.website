import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//effect writing words
const wordsForEachLanguage = {
    pt: [
        "TESTES INTENSIVOS",
        "DESENVOLVIMENTO ÁGIL",
        "ESTRATÉGIA DE PRODUTO",
        "SEGURANÇA"
    ],
    en: [
        "INTENSIVE TESTS",
        "AGILE DEVELOPMENT",
        "PRODUCT STRATEGY",
        "SECURITY"
    ],
    es: [
        "PRUEBAS INTENSIVAS",
        "DESARROLLO ÁGIL",
        "ESTRATEGIA DE PRODUCTO",
        "SEGURIDAD"
    ]
} as any

//component - effect writing
const WritingComponent: React.FC = () => {

    const { i18n } =useTranslation()

    const [text, setText] = useState<string>("")
    const [isWriting, setIsWriting] = useState<boolean>(false)
    const [isErasing, setIsErasing] = useState<boolean>(false)
    const [wordSelected, setWordSelected] = useState<string>("")
    const [phrases, setPhrases] = React.useState(wordsForEachLanguage[i18n.language])

    useEffect(() => {
        setPhrases(wordsForEachLanguage[i18n.language])
    }, [i18n.language])

    //writing effect
    useEffect(() => {

        var interval: any

        const writeText = () => {

            setIsWriting(true)
            var i = 0
            let text: string = ""

            interval = setInterval(() => {

                if (i < wordSelected.length) {
                    text = text + wordSelected[i]
                    setText(text)
                    i++
                } else {
                    setIsWriting(false)
                    clearInterval(interval)
                    if (!isErasing) {
                        setTimeout(() => eraseText, 1000)
                    }
                }

            }, 100)

        }

        const eraseText = () => {

            setIsErasing(true)
            let text: string = wordSelected
            interval = setInterval(() => {
                if (text.length !== 0) {
                    text = text.substring(0, text.length - 1)
                    setText(text)

                } else {

                    clearInterval(interval)
                    setIsErasing(false)
                }
            }, 100)

        }

        writeText()

    }, [wordSelected, isErasing])

    useEffect(() => {

        setWordSelected(phrases[Math.floor(Math.random() * phrases.length)])
        setInterval(() => {
            setWordSelected(phrases[Math.floor(Math.random() * phrases.length)])
        }, 5000)

    }, [phrases])

    return (
        <div className={styles.writing_component}>
            <h4>{text}</h4>
            {
                (isWriting || isErasing) &&
                <span className={styles.effect_cursor}></span>
            }
        </div>
    )
}

export default WritingComponent