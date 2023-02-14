import React from 'react'
import styles from './index.module.css'

//components admin context
import { useComponentsAdmin } from '@/contexts/componentsAdmin'

const HomePage: React.FC = () => {

  const { setSelectedComponent } = useComponentsAdmin()

  return (
    <div className={styles.home_component}>
      <div className={styles.buttons}>
        <div className={styles.create_post_button} onClick={() => setSelectedComponent("create")}>
          <img src="/img/add.png" alt="add-icon" />
          <p>Create post</p>
        </div>
        <div className={styles.edit_post_button} onClick={() => setSelectedComponent("edit")}>
          <img src="/img/edit.png" alt="edit-icon" />
          <p>Edit post</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage