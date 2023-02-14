import CardAlertContact from '@/components/contactComponents/cardAlertContact'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

//api
import Api from '@/services/api'

//utils
import { convertDate } from '@/utils/convertDate'
import CardEdit from '../cardEdit'
import LoaderTwo from '@/components/loaderTwo'

type MessageError = {
    message: string,
    type: "error" | "success"
}

//edit post component admin
const EditPost: React.FC = () => {

    const [allPosts, setAllPosts] = useState([])
    const [backupPosts, setBackupPosts] = useState([])
    const [load, setLoad] = useState<boolean>(false)
    const [alertMsgs, setAlertMsgs] = useState<MessageError[]>([])
    const [cardEdit, setCardEdit] = useState<any>(null)
    const [updatePost, setUpdatePost] = useState<any>(null)

    useEffect(() => {

        const fetchAllPosts = async () => {
            setLoad(true)
            try {
                let response = await Api.get('/read-posts')
                setLoad(false)
                if (response.status === 200 && response.data.success) {
                    setAllPosts(response.data.posts)
                    setBackupPosts(response.data.posts)
                }

            } catch (error: any) {
                setLoad(false)
                setAlertMsgs([{ message: "Internal error", type: "error" }])
                setAllPosts([])
            }

        }

        fetchAllPosts()

    }, [])

    useEffect(() => {

        //update posts list through od delete action
        const alterPosts = () => {

            let filter = backupPosts.filter((post: any) => post._id !== updatePost.post?._id)

            if(updatePost?.type === "edit"){
                filter = [...filter, updatePost?.post] as any
            }

            setBackupPosts([...filter] as any)
            setAllPosts([...filter] as any)
        }
        alterPosts()

    }, [updatePost])

    //search
    const search = (event: any) => {

        let value = event.target.value

        if (value) {

            let filter_posts = backupPosts.filter((post: any) =>
                post.title.toLowerCase().includes(value.toLowerCase())
                ||
                post.content.toLowerCase().includes(value.toLowerCase())
            )

            setAllPosts([...filter_posts])

        } else {
            setAllPosts([...backupPosts])
        }

    }

    return (
        <div className={styles.edit_component}>
            <div className={styles.search_card}>
                <input type="text" placeholder='Procure aqui...' onChange={search} />
            </div>
            <div className={styles.posts}>
                {
                    load ?
                        <div style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <LoaderTwo />
                        </div>
                        :
                        allPosts.map((post: any, index: number) => (
                            <div
                                className={styles.post}
                                key={index}
                                onClick={() => setCardEdit(post)}
                            >
                                <img src={post.picture} alt={post.title} />
                                <span>
                                    <h4>{post.title.length > 41 ? post.title.slice(0, 41) + "..." : post.title}</h4>
                                    <span className={styles.texts}>
                                        <p>{post.content.slice(0, 31) + "..."}</p>
                                        <small>{convertDate(post.createdAt)}</small>
                                    </span>
                                </span>
                            </div>
                        ))
                }
            </div>
            {
                cardEdit &&
                <CardEdit
                    cardEdit={cardEdit}
                    setCardEdit={setCardEdit}
                    setAlertMsgs={setAlertMsgs}
                    setUpdatePost={setUpdatePost}
                />
            }
            {<CardAlertContact alertMessages={alertMsgs} />}
        </div>
    )
}

export default EditPost