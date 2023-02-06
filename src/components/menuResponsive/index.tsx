import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

const MenuResponsive = () => {
    return (
        <div className={styles.menu}>
            <ul>

                <Link href="/"><p>HOME</p></Link>

                <Link href="/product"><p>PRODUTOS</p></Link>

                <Link href="/terceirizacao"><p>TERCEIRIZAÇÃO</p></Link>

                <Link href="/blog"><p>BLOG</p></Link>

                <nav className={styles.nav_contact}>
                    <Link href="/contact"><p>CONTATO</p></Link>
                </nav>
                
            </ul>
        </div>
    )
}

export default MenuResponsive