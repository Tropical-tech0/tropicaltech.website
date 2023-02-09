import React from 'react'
import styles from '../styles/404.module.css'

//components
import Navbar from '@/components/navbar'

//404 page - not found
export default function NotFound() {

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.card}>
                <span>
                    <div className={styles.img_card}>
                        <img src="/img/logo-footer.png" alt="logo" />
                    </div>
                    <div className={styles.texts}>
                        <h1>404</h1>
                        <h4>Page Not Found</h4>
                    </div>
                </span>
            </div>
        </div>
    )

}