import React from 'react'
import Link from "next/link"
import { useTranslation } from 'react-i18next'

//styles
import styles from './index.module.css'

//components
import ButtonHam from '../buttonHam'
import MenuResponsive from '../menuResponsive'

const Navbar: React.FC = () => {

    const { t } = useTranslation()

    //render responsive menu
    const [activeResponsiveMenu, setActiveResponsiveMenu] = React.useState<boolean>(false)

    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/img/logo-icon.png" alt="" width={"46px"} height="46px" />
                </Link>
            </div>
            <div className={styles.navs}>
                <ul>
                    <li>
                        <Link href='/'>{t("home")}</Link>
                    </li>
                    <li>
                        <Link href='/product'>{t("product")}</Link>
                    </li>
                    <li>
                        <Link href='/terceirizacao'>{t("terceirizacao")}</Link>
                    </li>
                    <li>
                        <Link href='/blog'>{t("blog")}</Link>
                    </li>
                    <li className={styles.contact_nav}>
                        <Link href='/contact'>{t("contact")}</Link>
                    </li>
                </ul>
            </div>
            <span className={styles.responsive_button}>
                <ButtonHam
                    setActiveResponsiveMenu={setActiveResponsiveMenu}
                    activeResponsiveMenu={activeResponsiveMenu}
                />
            </span>
            {
                activeResponsiveMenu &&
                // <NavsResponsive />
                <MenuResponsive/>
            }
        </header>
    )
}

export default Navbar