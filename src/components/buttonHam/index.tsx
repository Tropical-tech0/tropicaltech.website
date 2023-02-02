import React, { Dispatch, SetStateAction } from 'react'
import styles from './index.module.css'

type Props = {
  setActiveResponsiveMenu: SetStateAction<Dispatch<boolean>> | any,
  activeResponsiveMenu: boolean
}

//button hamburger for responsive menu
const ButtonHam: React.FC<Props> = ({setActiveResponsiveMenu, activeResponsiveMenu}) => {

  const [activeButtonHam, setActiveButtonHam] = React.useState<boolean>(activeResponsiveMenu)

  //update state that renders the responsive menu
  React.useEffect(() => {
    setActiveResponsiveMenu(activeButtonHam)
  }, [activeButtonHam])

  return (
    <div className={(activeButtonHam && styles.active_ham)+" "+styles.button_ham} 
      onClick={() => setActiveButtonHam(!activeButtonHam)}
    >
      <span className={styles.before}></span>
      <span className={styles.center}></span>
      <span className={styles.after}></span>
    </div>
  )
}

export default ButtonHam