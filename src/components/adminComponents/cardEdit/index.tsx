import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './index.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//api
import Api from '@/services/api';

//components
import ReadPicture from '../readPicture';
import LoaderTwo from '@/components/loaderTwo';
import TextEditor from '../textEditor';

type Props = {
    cardEdit: any,
    setCardEdit: SetStateAction<Dispatch<any>>,
    setAlertMsgs: any
    setUpdatePost: any
}

//edit card 
const CardEdit: React.FC<Props> = ({ cardEdit, setCardEdit, setAlertMsgs, setUpdatePost }) => {

    const [title, setTitle] = useState<string>(cardEdit.title)
    const [picture, setPicture] = useState<string>("")
    const [load, setLoad] = useState<boolean>(false)
    const [modalDelete, setModalDelete] = useState<boolean>(false)

    //editor state
    const [editorState, setEditorState] = useState<string>(cardEdit.content)

    //handle edition
    const editPost = async () => {
        setLoad(true)
        try {
            let response = await Api.post('/edit-post', {
                picture,
                postId: cardEdit._id,
                content: editorState,
                title
            })
            setLoad(false)
            if (response.status === 200 && response.data.success) {
                setAlertMsgs([{ message: "Edit save", type: "success" }])
                setUpdatePost({ post: response.data.post, type: "edit" })
            }

        } catch (error: any) {
            setLoad(false)
            console.log(error)
            setAlertMsgs([{ message: error.response.data.message, type: "error" }])
        }

    }

    //delete post 
    const deletePost = async () => {
        setLoad(true)
        setModalDelete(false)

        try {
            let response = await Api.get('/delete-post?postId=' + cardEdit._id)

            setLoad(false)

            if (response.status === 200 && response.data.success) {
                setAlertMsgs([{ message: "Post deleted", type: "success" }])
                setUpdatePost({ post: cardEdit, type: "delete" })
            }

        } catch (error: any) {
            setLoad(false)
            console.log(error)
            if (error.status === 502) {
                setAlertMsgs([{ message: error.response.data.message, type: "error" }])
                setUpdatePost({ post: cardEdit, type: "delete" })
                return
            }
            setAlertMsgs([{ message: error.response.data.message, type: "error" }])
        }
    }

    return (
        <div className={styles.edit_card}>
            <div className={styles.header}>
                <Button variant="outlined" color="error" onClick={() => setModalDelete(true)}>
                    Delete
                </Button>
                <Button variant="outlined" onClick={() => setCardEdit(null as any)}>
                    Back
                </Button>
            </div>
            <div className={styles.body}>
                <div className={styles.form}>
                    
                    <TextField
                        id="filled-basic"
                        label="Post Title"
                        variant="filled"
                        onChange={(event: any) => setTitle(event.target.value)}
                        value={title}
                        style={{ width: "100%" }}
                    />

                    <TextEditor setEditorState={setEditorState} editorState={editorState} />

                    <div className={styles.read_picture_container}>
                        <div className={styles.read_picture_card}>
                            <ReadPicture setPicture={setPicture} isVisible={true} pictureFile={cardEdit.picture} />
                        </div>
                    </div>
                    <div style={{ width: "100%" }}>
                        <Button
                            variant="contained"
                            style={{ width: "100%", padding: "10px" }}
                            onClick={() => editPost()}
                        >
                            Save
                        </Button>
                    </div>
                </div>

            </div>
            {
                load &&
                <div className={styles.loader}>
                    <LoaderTwo />
                </div>
            }
            {
                modalDelete &&
                <div className={styles.delete_modal}>
                    <span className={styles.modal_text}>
                        <p>Delete ?</p>
                    </span>
                    <div className={styles.__line__}></div>
                    <span className={styles.modal_buttons}>
                        <Button variant="contained" onClick={() => deletePost()}>
                            Yes
                        </Button>
                        <Button variant="contained" onClick={() => setModalDelete(false)}>
                            No
                        </Button>
                    </span>
                </div>
            }
        </div>
    )
}

export default CardEdit