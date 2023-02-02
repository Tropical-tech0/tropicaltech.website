import React, { useState, useEffect } from 'react'
import styles from './index.module.css'

type Props = {
    words: string[]
}

//component - effect writing
const WritingComponent: React.FC<Props> = ({ words }) => {

    const [text, setText] = useState<string>("")
    const [isWriting, setIsWriting] = useState<boolean>(false)
    const [isErasing, setIsErasing] = useState<boolean>(false)
    const [wordSelected, setWordSelected] = useState<string>("")

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

        setWordSelected(words[Math.floor(Math.random() * words.length)])
        setInterval(() => {
            setWordSelected(words[Math.floor(Math.random() * words.length)])
        }, 5000)

    }, [])

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