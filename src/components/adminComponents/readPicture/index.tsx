import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import styles from './index.module.css'

type Props = {
    setPicture: SetStateAction<Dispatch<string>> | any,
    isVisible?: any,
    pictureFile?: any
}

//read picture component
const ReadPicture: React.FC<Props> = ({setPicture, isVisible, pictureFile}) => {

    const [readPicture, setReadPicture] = useState<string>(pictureFile || "")
    const [visibleImg, setVisibleImg] = useState<boolean>(isVisible || false)

    const readFile = (event: any) => {

        let reader = new FileReader()

        let file = event.target.files[0]

        reader.readAsDataURL(file)

        reader.onloadend = () => {

            setReadPicture(reader.result as string)

            setVisibleImg(true)

        }

    }

    useEffect(() => {
        setPicture(readPicture)
    }, [readPicture])

    return (
        <div className={styles.container}>
            {
                visibleImg ?
                    <div className={styles.img_card}>
                        <img src={readPicture}  alt="img"  />
                        <div 
                            className={styles.delete_card} 
                            onClick={() => [setReadPicture(''), setVisibleImg(false)]}
                        >
                            <img src="/img/delete.png" alt="icon-delete" />
                        </div>
                    </div>
                :
                    <div>
                        <Button 
                            variant="contained" 
                            component="label" 
                            style={{
                                background: "none",
                                boxShadow: "none"
                            }}
                        >
                            <span className={styles.read_btn_text}>
                                <img src="/img/image.png" alt="image" width={"60px"} height="60px" />
                                <p>Upload image</p>
                            </span>
                            <input hidden type="file" onChange={readFile} />
                        </Button>
                    </div>
            }
        </div>
    )
}

export default ReadPicture