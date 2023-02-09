import React from 'react'
import styles from './index.module.css'
import { Alert } from '@mui/material'

type Message = {
  type: "error" | "success",
  message: string
}

type Props = {
  alertMessages: Message[]
}

//to manager alert messages
const CardAlertContact: React.FC<Props> = ({ alertMessages }) => {

  const [isVisible, setIsVisible] = React.useState<boolean>(true)
  const [alerts, setAlerts] = React.useState<Message[]>(alertMessages)

  //set new alert messages
  React.useEffect(() => {
    setAlerts(alertMessages)
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 5000)
  }, [alertMessages])

  return (
    <div className={styles.alert_card}>
      {
        alerts.map((message: Message, index: number) => (

          message.type === "error"
          ? isVisible && <Alert severity='error' key={index} onClose={() => setIsVisible(false)}>{message.message}</Alert>
          : isVisible && <Alert key={index} onClose={() => setIsVisible(false)}>{message.message}</Alert>

        ))
        
      }
    </div>
  )
}

export default CardAlertContact