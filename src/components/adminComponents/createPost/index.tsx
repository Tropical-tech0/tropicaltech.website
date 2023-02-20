import React, { useState } from 'react'
import styles from './index.module.css'

//components
import ReadPicture from '../readPicture'
import LoadCard from '@/components/loadCard'
import CardAlertContact from '@/components/contactComponents/cardAlertContact'
import TextEditor from '../textEditor'

//rest api
import Api from '@/services/api'

//utils
import ExtractTextFromHTML from '@/utils/extractTextFromHTML'

type AlertMessages = {
    message: string, 
    type: "error" | "success"
}

//create post - admin   
const CreatePost: React.FC = () => {

    const [picture, setPicture] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [editorState, setEditorState] = useState("")
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
        if(!title || typeof title === undefined || title === null){
            errors.push({message: messageErrors["title"], type: "error"})
        }
        if(!editorState || typeof editorState === undefined || editorState === null){
            errors.push({message: messageErrors["content"], type: "error"})
        }

        if(errors.length > 0){
            setLoad(false)
            setMessages(errors)
            return
        }

        try {
            
            let response = await Api.post('/create-post', {
                title, 
                content: editorState, 
                picture,
                description: ExtractTextFromHTML(editorState).slice(0, 100)
            })

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
                    <LoadCard title='creating'/>
            }
            {
                //card alert messages
                <CardAlertContact alertMessages={messages}/>
            }
            <div className={styles.card_one}>
                <div className={styles.content}>
                    <TextEditor setEditorState={setEditorState}/>
                </div>
            </div>
            <div className={styles.card_two}>
                <div className={styles.title}>
                    <textarea 
                        rows={5} 
                        placeholder="Add Title"
                        onChange={(event: any) => setTitle(event.target.value)}
                        value={title}
                    >
                    </textarea>
                </div>
                <div className={styles.picture_card}>
                    <ReadPicture setPicture={setPicture}/>
                </div>
            </div>
            <div className={styles.card_three}>
                <div className={styles.button_card}>
                    <button onClick={() => handlePost()}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost