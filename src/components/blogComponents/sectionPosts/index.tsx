import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './index.module.css'

//rest api
import Api from '@/services/api'

//components
import CardAlertContact from '@/components/contactComponents/cardAlertContact'
import Loader from '@/components/loader'

//utils
import { convertDate } from '@/utils/convertDate'

type AlertMessage = {
  message: string,
  type: "error" | "success"
}

//list all posts
const SectionPosts: React.FC<any> = ({ dataPosts }) => {

  const [allPosts, setAllPosts] = useState([])
  const [alertMsgs, setAlertMsgs] = useState<AlertMessage[]>([])
  const [load, setLoad] = useState<boolean>(false)

  //fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoad(true)
      try {
        let response = await Api.get('/read-posts')
        setLoad(false)
        if(response.status === 200 && response.data.success){
          setAllPosts(response.data.posts)
        }

      } catch (error: any) {
        setLoad(false)
        setAlertMsgs([{message: "Internal error", type: "error"}])
        setAllPosts([])
      }

    }
    if(!dataPosts || typeof dataPosts === undefined || dataPosts === null || dataPosts?.length === 0){
      fetchPosts()
    }else{
      setAllPosts(dataPosts)
    }
  }, [])

  return (
    <section className={styles.posts_section}>
      {
        load ?
          <div className={styles.loader}>
            <span>
              <Loader/>
              <p>Loading...</p>
            </span>
          </div>
        :
        allPosts.map((post: any, index: number) => (
          <div className={styles.post} key={index}>
            <Link href={`blog/${post._id}`}>
              {
                post?.picture ?
                <img src={post.picture} alt={post.title} />
                :
                <div className={styles.without_img}>
                  <img src="/img/post-icon.png" alt="post-icon" />
                </div>
              }
            </Link>
            <span>
              <small>{convertDate(post.createdAt)}</small>
              <Link href={`blog/${post._id}`}>
                <h4>{post.title}</h4>
              </Link>
              <p>{post.description}</p>
            </span>
            <Link href={`blog/${post._id}`}>
              <div className={styles.read_more_button}>Read more</div>
            </Link>
          </div>
        ))
      }
      {<CardAlertContact alertMessages={alertMsgs}/>}
    </section>
  )
}

export default SectionPosts