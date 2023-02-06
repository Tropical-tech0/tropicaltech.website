import React from 'react'
import styles from './index.module.css'
import TextField from '@mui/material/TextField';

//contact section - contact page
const SectionContact: React.FC = () => {
    return (
        <section className={styles.contact_section}>
            <div className={styles.apresentation}>
                <div className={styles.texts}>
                    <h4>Vamos Trabalhar!</h4>
                    <p>
                        Transformamos suas ideias em soluções digitais inovadoras,
                        entre em contato conosco e permita-nos ajudá-lo a alcançar seus objetivos.
                    </p>
                </div>
                <div className={styles.img_card}>
                    <img src="/img/background-one-home.jpg" alt="background-clip-path-software-development" />
                </div>
                <div className={styles.img_card_mobile}></div>
            </div>
            <div className={styles.contact_form}>
                <div className={styles.card_title}>
                    <span className={styles.card}>
                        <h4>Entre em contato!</h4>
                    </span>
                </div>
                <div className={styles.card_form}>
                    <span className={styles.first}>
                        <TextField
                            id="standard-basic"
                            label="Primeiro nome"
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Último nome"
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                        />
                    </span>
                    <span className={styles.second}>
                        <TextField
                            id="standard-basic"
                            label="E-mail"
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Telefone"
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                        />
                    </span>
                    <TextField 
                        id="standard-basic" 
                        label="Faixa de preço" 
                        variant="standard" 
                        sx={{ width: "100%", margin: "20px 0" }}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Descreva o seu projeto" 
                        variant="standard" 
                        sx={{ width: "100%", margin: "20px 0" }}
                    />
                    <button className={styles.send_button}>
                        <p>Enviar</p>
                        <img src="/img/send-icon.png" alt="send-icon" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SectionContact