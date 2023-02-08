import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

//responsive menu - navbar
const MenuResponsive = () => {

    const { t } = useTranslation()

    return (
        <div className={styles.menu}>
            <ul>

                <Link href="/">
                   <p>
                        {t("home").toUpperCase()}
                   </p>
                </Link>

                <Link href="/product">
                    <p>
                        {t("product").toUpperCase()}
                    </p>
                </Link>

                <Link href="/terceirizacao">
                    <p>
                        {t("terceirizacao").toUpperCase()}
                    </p>
                </Link>

                <Link href="/blog">
                    <p>
                        {t("blog").toUpperCase()}
                    </p>
                </Link>

                <nav className={styles.nav_contact}>
                    <Link href="/contact">
                        <p>
                            {t("contact").toUpperCase()}
                        </p>
                    </Link>
                </nav>

            </ul>
        </div>
    )
}

export default MenuResponsive