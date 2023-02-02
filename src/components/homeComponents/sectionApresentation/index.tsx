import React from 'react'
import styles from './index.module.css'

//components
import WhatsappButton from '@/components/whatsappButton'

//home page component - landing page
const SectionApresentation = () => {

    const background_content: any = React.useRef<HTMLElement>(null)
    const section: any = React.useRef<HTMLElement>(null)

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
        <section ref={section} className={styles.apresentation_section}>
            <div ref={background_content} className={styles.background_content}></div>
            <div className={styles.into_card}>
                <h4>SEJA BEM-VINDO À TROPICAL TECH</h4>
                <span>
                    <h5>
                        Somos uma software house, nosso time de desenvolvedores,
                        designers e estrategistas estão prontos para transformar seu negócio
                    </h5>
                    <WhatsappButton />
                </span>
            </div>
            <div className={styles.into_image}>
                <img
                    src="/img/design-cell-home.png"
                    alt="design-cell"
                    width={"90%"}
                    style={{ minWidth: '250px' }}
                />
            </div>
        </section>
    )
}

export default SectionApresentation