import React from 'react'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

//components
import WhatsappButton from '@/components/whatsappButton'

//home page component - landing page
const SectionApresentation = () => {

    const background_content: any = React.useRef<HTMLElement>(null)
    const section: any = React.useRef<HTMLElement>(null)
    const { t } = useTranslation()

    //scroll effect - brightness background
    React.useEffect(() => {
        
        window.onscroll = () => {
            if (typeof window !== 'undefined' && section.current !== null) {

                let scroll = window.pageYOffset
                let height = section.current.offsetHeight
                let opacity = function () {
                    let calc = (scroll / 100) * (height / 100) * 0.05
                    if (calc < 0.6) calc = 0.6
                    return calc
                }

                background_content.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity()})`

            }
        }

    }, [])

    return (
        <section ref={section} className={styles.apresentation_section} aria-labelledby="presentation_header">
            <div ref={background_content} className={styles.background_content}></div>
            <div className={styles.into_card}>
                <h4 id="presentation_header">{t("welcome")}</h4>
                <span>
                    <h5 id="presentation_text">
                        {t("descriptionWelcome")}
                    </h5>
                    <WhatsappButton />
                </span>
            </div>
            <div className={styles.into_image}>
                <img
                    src="/img/design-cell-home.png"
                    alt="Tropical Tech app design on a cell phone"
                    width={"90%"}
                    style={{ minWidth: '250px' }}
                />
            </div>
        </section>
    )
}

export default SectionApresentation