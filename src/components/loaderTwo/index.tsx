import React from 'react'
import styles from './index.module.css'

//loader icon - animation
const LoaderTwo: React.FC = () => {
    return (
        <svg viewBox="25 25 50 50" className={styles.svg_card}>
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    )
}

export default LoaderTwo