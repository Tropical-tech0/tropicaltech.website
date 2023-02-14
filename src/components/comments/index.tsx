import React from 'react'
import styles from './index.module.css'

//components
import Loader from '../loader'

//api
import Api from '@/services/api'
import CardAlertContact from '../contactComponents/cardAlertContact'

type FormComment = {
    email?: string, 
    name?: string,
    website?: string,
    comment?: string
}

type AlertMessages = {
    message: string, 
    type: "error" | "success"
}


//comments card - blog
const Comments: React.FC<any> = ({postId}) => {

    const [postData, setPostData] = React.useState<any>({})
    const [load, setLoad] = React.useState<boolean>(false)
    const [alertMsgs, setAlertMsgs] = React.useState<any>([])
    const [form, setForm] = React.useState<FormComment>({
        email: "",
        name: "",
        website: "",
        comment: ""
    })

    const sendComment = async () => {
        setLoad(true)
        
        let errors: AlertMessages[] = []

        if(!form.email || typeof form.email === undefined || form.email === null ){
            errors.push({message: "Invalid email", type: "error"})
        }
        if(!form.name || typeof form.name === undefined || form.name === null ){
            errors.push({message: "Invalid name", type: "error"})
        }
        if(!form.comment || typeof form.comment === undefined || form.comment === null ){
            errors.push({message: "Invalid comment", type: "error"})
        }

        if(errors.length > 0){
            setLoad(false)
            setAlertMsgs(errors)
            return
        }

        try {
            let response = await Api.post('/create-comment', {...form, postId})
            setLoad(false)
            if(response.status === 200 && response.data.success){
                setAlertMsgs([{message: "Comment created", type: "success"}])
                setForm({email: "", name: "", website: "", comment: ""})
            }
        } catch (error) {
            setLoad(false)
            console.log(error)
            setAlertMsgs([{message: "Internal error", type: "error"}])
        }

    }

    return (
        <div className={styles.comments_card}>
            <div className={styles.form_comment}>
                <div className={styles.header}>
                    <h4>LEAVE A REPLY</h4>
                    <div className={styles.__line__}></div>
                    <p>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className={styles.body}>
                    <label style={{ marginTop: "-10px" }}>Comment *</label>
                    <textarea 
                        rows={10}
                        onChange={(event: any) => setForm({...form, comment: event.target.value})}
                        value={form.comment}
                    ></textarea>
                    <div className={styles.inputs}>
                        <span>
                            <label>Name *</label>
                            <input 
                                type="text" 
                                onChange={(event: any) => setForm({...form, name: event.target.value})}
                                value={form.name}
                                />
                        </span>
                        <span>
                            <label>E-mail *</label>
                            <input 
                                type="text" 
                                onChange={(event: any) => setForm({...form, email: event.target.value})}
                                value={form.email}
                                />
                        </span>
                        <span>
                            <label>Website</label>
                            <input 
                                type="text" 
                                onChange={(event: any) => setForm({...form, website: event.target.value})}
                                value={form.website}
                            />
                        </span>
                    </div>
                    <button onClick={() => sendComment()}>
                        {
                            load ?
                            <div style={{padding: "10px"}}>
                                <Loader/>   
                            </div>
                            :
                            "POST COMMENT"
                        }
                    </button>
                </div>
            </div>
            {<CardAlertContact alertMessages={alertMsgs}/>}
        </div>
    )
}

export default Comments