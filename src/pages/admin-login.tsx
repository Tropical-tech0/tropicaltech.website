import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router';
import styles from '../styles/adminLogin.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

//use context admin
import useAuthAdmin from '@/contexts/useAuthAdmin';
import CardAlertContact from '@/components/contactComponents/cardAlertContact';
import Loader from '@/components/loader';

type FormLogin = {
    username?: string,
    password?: string
}

//admin login
const LoginAdmin: React.FC = () => {

    const [form, setForm] = useState<FormLogin>({
        username: "",
        password: ""
    })
    const [load, setLoad] = useState<boolean>(false)
    const [alertMsgs, setAlertMsgs] = useState<any>([])

    const { login } = useAuthAdmin()

    const auth = async (event?: React.FormEvent<HTMLFormElement>) => {
        setLoad(true)

        event?.preventDefault()

        let errors: any = []

        var errorMessages = {
            username: "Username invalid",
            password: "Password invalid"
        } as any
 
        //validate form
        Object.entries(form).forEach(([key, value]) => {
            if (!value || typeof value === undefined || value === null) {
                errors.push({ message: errorMessages[key], type: "error" })
            }
        })

        if (errors.length > 0) {
            setLoad(false)
            return setAlertMsgs(errors)
        }

        try {
            let res = await login(form as any)

            setLoad(false)

            if(res.data.auth){
                Router.push('/admin')
            }
        } catch (error: any) {

            setLoad(false)

            if (error.response?.status === 401) {
                setAlertMsgs([{ message: error.response.data.message, type: "error" }])
                return
            }

            if (error.response?.status === 500) {
                setAlertMsgs([{ message: error.response.data.message, type: "error" }])
            }
        }

    }

    return (
        <>
            <Head>
                <title>Tropical Tech | Login</title>
            </Head>
            <Navbar />
            <div className={styles.login_component}>
                <div className={styles.login_card}>
                    <div className={styles.header}>
                        <span>
                            <img src="/img/logo-icon.png" alt="logo-icon" />
                            <p>Admin</p>
                        </span>
                    </div>
                    <div className={styles.body}>
                        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => auth(event)}>
                            <TextField
                                id="outlined-basic"
                                label="username"
                                variant="outlined"
                                onChange={(event: any) => setForm({ ...form, username: event.target.value })}
                                value={form.username}
                            />
                            <TextField
                                id="outlined-basic"
                                label="password"
                                variant="outlined"
                                type="password"
                                onChange={(event: any) => setForm({ ...form, password: event.target.value })}
                                value={form.password}
                            />
                            <div className={styles.button_card}>
                                <Button variant="contained" onClick={() => auth()} type="submit">
                                    {
                                        load ?
                                            <div style={{ padding: "10px" }}>
                                                <Loader />
                                            </div>
                                            :
                                            "ACCESS"
                                    }
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {<CardAlertContact alertMessages={alertMsgs} />}
            <Footer />
        </>
    )
}

export default LoginAdmin