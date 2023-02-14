import Link from 'next/link'
import React from 'react'
import styles from './index.module.css'

//components admin context
import { useComponentsAdmin } from '@/contexts/componentsAdmin'
import MenuOption from '@/components/menuOption'

//context auth admin
import useAuthAdmin from '@/contexts/useAuthAdmin'

const NavbarAdmin: React.FC = () => {

  const { setSelectedComponent, selectedComponent } = useComponentsAdmin()
  const { logout } = useAuthAdmin()

  return (
    <div className={styles.navbar}>
      <Link href='/admin'>
        <span className={styles.logo}>
          <img src="/img/logo-icon.png" alt="logo" />
          <p>Admin</p>
        </span>
      </Link>
      <div className={styles.buttons}>
        {
          !(selectedComponent === "home") &&
          <span className={styles.button_back} onClick={() => setSelectedComponent("home")}>
            <p>Back</p>
          </span>
        }
        <span className={styles.button_quit} onClick={() => logout()}>
          <p>Quit</p>
          <img src="/img/quit.png" alt="logo-quit" />
        </span>
        <span className={styles.mobile_menu}>
          <MenuOption/>
        </span>
      </div>
    </div>
  )
}

export default NavbarAdmin