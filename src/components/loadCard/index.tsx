import React from 'react'
import styles from './index.module.css'

//components
import LoaderTwo from '../loaderTwo'

//load card
const LoadCard: React.FC<{title: string}> = ({title}) => {
  return (
    <div className={styles.loader}>
        <div className={styles.loader_card}>
            <LoaderTwo/>
            <p>{title}...</p>
        </div>
    </div>
  )
}

export default LoadCard