import React from 'react'
import Link from "next/link"

//styles
import styles from './index.module.css'

//components
import ButtonHam from '../buttonHam'

//navs menu responsive
const NavsResponsive: React.FC = () => {
    return (
        <div className={styles.responsive_menu}>
            <ul>
                <Link href="/">Home</Link>

                <Link href="/product">Produtos</Link>

                <Link href="/terceirizacao">Terceirização</Link>

                <Link href="/blog">Blog</Link>

                <Link href="/contact">Contato</Link>
            </ul>
        </div>
    )
}

const Navbar: React.FC = () => {

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
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/product'>Produtos</Link>
                    </li>
                    <li>
                        <Link href='/terceirizacao'>Terceirização</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className={styles.contact_nav}>
                        <Link href='/contact'>Contato</Link>
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
                <NavsResponsive />
            }
        </header>
    )
}

export default Navbar