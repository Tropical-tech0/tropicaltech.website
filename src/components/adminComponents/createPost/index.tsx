import React, { useState } from 'react'
import styles from './index.module.css'

//components
import ReadPicture from '../readPicture'
import Loader from '@/components/loader'
import CardAlertContact from '@/components/contactComponents/cardAlertContact'

//rest api
import Api from '@/services/api'

type FormPost = {
    title?: string,
    content?: string
}

type AlertMessages = {
    message: string, 
    type: "error" | "success"
}

//create post - admin   
const CreatePost: React.FC = () => {

    const [picture, setPicture] = useState<string>("")
    const [form, setForm] = useState<FormPost | undefined>({
        title: "",
        content: ""
    })
    const [messages, setMessages] = useState<AlertMessages[]>([])
    const [load, setLoad] = useState<boolean>(false)

    //put new post
    const handlePost = async () => {
        
        setLoad(true)

        let errors: AlertMessages[] = []

        var messageErrors = {
            title: "Title invalid",
            content: "Content invalid" 
        } as any

        //validate form
        Object.entries(form as FormPost).forEach(([key, value]) => {
            if(!value || typeof value === undefined || value === null){
                errors.push({message: messageErrors[key], type: "error"})
            }
        })

        if(errors.length > 0){
            setLoad(false)
            setMessages(errors)
            return
        }

        try {
            
            let response = await Api.post('/create-post', {...form, picture})

            setLoad(false)

            if(response.status === 200 && response.data.success){
               return setMessages([{message: "Post created", type: "success"}])
            }

            setMessages([{message: "Internal error", type: "error"}])

        } catch (error: any) {
            setLoad(false)

            console.log(error)
            
            if(error.code === "ERR_BAD_RESPONSE") 
                return setMessages([{message: "Post created", type: "success"}])
            
            setMessages([{message: "Internal error", type: "error"}])
        }

    }

    return (
        <div className={styles.create_component}>
            {
                load &&
                    <div className={styles.loader}>
                        <Loader/>
                    </div>
            }
            {
                //card alert messages
                <CardAlertContact alertMessages={messages}/>
            }
            <div className={styles.card_one}>
                <div className={styles.title}>
                    <textarea 
                        rows={5} 
                        placeholder="Add Title"
                        onChange={(event: any) => setForm({...form, title: event.target.value})}
                        value={form?.title}
                    >
                    </textarea>
                </div>
                <div className={styles.content}>
                    <textarea 
                        rows={25} 
                        placeholder="Add content post"
                        onChange={(event: any) => setForm({...form, content: event.target.value})}
                        value={form?.content}
                    >
                    </textarea>
                </div>
            </div>
            <div className={styles.card_two}>
                <div className={styles.picture_card}>
                    <ReadPicture setPicture={setPicture}/>
                </div>
                <div className={styles.button_card}>
                    <button onClick={() => handlePost()}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost