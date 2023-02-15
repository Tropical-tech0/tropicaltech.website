import React from 'react'
import styles from './index.module.css'

//components
import Loader from '../loader'
import CardAlertContact from '../contactComponents/cardAlertContact'

//api
import Api from '@/services/api'

//utils
import { convertDate } from '@/utils/convertDate'

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

type Props = {
    postId: string | any
}

//component comment 
const Comment: React.FC<{commentData: any}> = ({commentData}) => (
    <span className={styles.comment}>
        <div>
            <img src="/img/user.png" alt="user-icon" />
        </div>
        <div>
            <h4>{commentData.name}</h4>
            <p>{commentData.comment}</p>
            <small>{convertDate(commentData.createdAt)}</small>
        </div>
    </span>
)

//comments card - blog
const Comments: React.FC<Props> = ({ postId }) => {

    const [load, setLoad] = React.useState<boolean>(false)
    const [alertMsgs, setAlertMsgs] = React.useState<AlertMessages[] | []>([])
    const [comments, setComments] = React.useState<any>([])
    const [form, setForm] = React.useState<FormComment>({
        email: "",
        name: "",
        website: "",
        comment: ""
    })

    React.useEffect(() => {

        //get post's comments by post id
        const getComments = async () => {
            
            let id = postId || location.pathname.split('/').pop()
            
            try {
                var response = await Api.get('/read-comments?postId='+id)
                console.log(response.data)
                if(response.status === 200 && response.data.success){
                    return setComments(response.data.comments)
                }

                setComments([])

            } catch (error) {
                console.log(error)
                setComments([])
            }

        }
        getComments()
 
    }, [postId])

    const sendComment = async () => {
        setLoad(true)

        let errors: AlertMessages[] = []

        if (!form.email || typeof form.email === undefined || form.email === null) {
            errors.push({ message: "Invalid email", type: "error" })
        }
        if (!form.name || typeof form.name === undefined || form.name === null) {
            errors.push({ message: "Invalid name", type: "error" })
        }
        if (!form.comment || typeof form.comment === undefined || form.comment === null) {
            errors.push({ message: "Invalid comment", type: "error" })
        }

        if (errors.length > 0) {
            setLoad(false)
            setAlertMsgs(errors)
            return
        }

        try {
            let response = await Api.post('/create-comment', { ...form, postId })
            setLoad(false)
            if (response.status === 200 && response.data.success) {
                setAlertMsgs([{ message: "Comment created", type: "success" }])
                setForm({ email: "", name: "", website: "", comment: "" })
                
                //add comment
                setComments([{...form, createdAt: new Date()}, ...comments])
            }
        } catch (error) {
            setLoad(false)
            console.log(error)
            setAlertMsgs([{ message: "Internal error", type: "error" }])
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
                        onChange={(event: any) => setForm({ ...form, comment: event.target.value })}
                        value={form.comment}
                    ></textarea>
                    <div className={styles.inputs}>
                        <span>
                            <label>Name *</label>
                            <input
                                type="text"
                                onChange={(event: any) => setForm({ ...form, name: event.target.value })}
                                value={form.name}
                            />
                        </span>
                        <span>
                            <label>E-mail *</label>
                            <input
                                type="text"
                                onChange={(event: any) => setForm({ ...form, email: event.target.value })}
                                value={form.email}
                            />
                        </span>
                        <span>
                            <label>Website</label>
                            <input
                                type="text"
                                onChange={(event: any) => setForm({ ...form, website: event.target.value })}
                                value={form.website}
                            />
                        </span>
                    </div>
                    <button onClick={() => sendComment()}>
                        {
                            load ?
                                <div style={{ padding: "10px" }}>
                                    <Loader />
                                </div>
                                :
                                "POST COMMENT"
                        }
                    </button>
                </div>
            </div>
            <div className={styles.comments_list}>
                <div className={styles.comments_list_header}>
                    <p>Comments</p>
                    <div className={styles.__line__}></div>
                </div>
                {
                    comments.length > 0 &&
                        comments.map((comment: any, index:number) => (
                            <div key={index}>
                                <Comment commentData={comment}/>
                            </div>
                        ))
                }
            </div>
            {<CardAlertContact alertMessages={alertMsgs} />}
        </div>
    )
}

export default Comments