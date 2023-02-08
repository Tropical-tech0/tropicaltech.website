import React from 'react'
import styles from './index.module.css'
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

//error messages
import { errorMessages as MessagesError, ErrorMessages } from './errorMessages';

//type form data
type DataForm = {
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
    price?: string,
    description?: string
}

//contact section - contact page
const SectionContact: React.FC = () => {

    //to manager the form data
    const [form, setForm] = React.useState<DataForm>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        price: "",
        description: ""
    } as DataForm)

    //store the error messages
    const [errorMessages, setErrorMessages] = React.useState<ErrorMessages | any>(MessagesError)

    const { t, i18n } = useTranslation()
    
    //check if mail is valid
    const validateEmail = (email: string) => {
        let re = /\S+@\S+\.\S+/;
        let result = re.test(email);
        return result
    }

    //send email
    const sendMail = async () => {

        let errors: {error: string}[] = []
        let errorMsgs: any = errorMessages[i18n.language]

        let isValidMail = validateEmail(form.email as string)

        !isValidMail && errors.push({error: errorMsgs["email"]})

        //check errors in the form
        Object.entries(form).forEach(([key, value]) => {

            if(!value || typeof value === undefined || value === null){
                errors.push({error: errorMsgs[key]})
            }

        })

        if(errors.length > 0 ){
           return errors.forEach(err => console.log(err))
        }

        //under construction

    }

    return (
        <section className={styles.contact_section}>
            <div className={styles.apresentation}>
                <div className={styles.texts}>
                    <h4>{t("apresentationContactTitle")}</h4>
                    <p>
                        {t("apresentationContactDescription")}
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
                        <h4>{t("cardContactText")}</h4>
                    </span>
                </div>
                <div className={styles.card_form}>
                    <span className={styles.first}>
                        <TextField
                            id="standard-basic"
                            label={t("inputFirstName")}
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                            onChange={(event: any) => setForm({...form, firstName: event.target.value})}
                            value={form.firstName}
                        />
                        <TextField
                            id="standard-basic"
                            label={t("inputLastName")}
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                            onChange={(event: any) => setForm({...form, lastName: event.target.value})}
                            value={form.lastName}
                        />
                    </span>
                    <span className={styles.second}>
                        <TextField
                            id="standard-basic"
                            label={t("inputEmail")}
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                            onChange={(event: any) => setForm({...form, email: event.target.value})}
                            value={form.email}
                        />
                        <TextField
                            id="standard-basic"
                            label={t("inputPhone")}
                            variant="standard"
                            sx={{ width: "100%", margin: "20px 0" }}
                            onChange={(event: any) => setForm({...form, phone: event.target.value})}
                            value={form.phone}
                        />
                    </span>
                    <TextField 
                        id="standard-basic" 
                        label={t("inputPrice")}
                        variant="standard" 
                        sx={{ width: "100%", margin: "20px 0" }}
                        onChange={(event: any) => setForm({...form, price: event.target.value})}
                        value={form.price}
                    />
                    <TextField 
                        id="standard-basic" 
                        label={t("projectDescription")} 
                        variant="standard" 
                        sx={{ width: "100%", margin: "20px 0" }}
                        onChange={(event: any) => setForm({...form, description: event.target.value})}
                        value={form.description}
                    />
                    <button className={styles.send_button} onClick={() => sendMail()}>
                        <p>{t("sendButton")}</p>
                        <img src="/img/send-icon.png" alt="send-icon" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SectionContact