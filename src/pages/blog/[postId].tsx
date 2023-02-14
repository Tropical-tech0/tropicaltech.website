import React, { useEffect, useState } from 'react'
import styles from '../../styles/Post.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

//components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Comments from '@/components/comments'
import LoaderTwo from '@/components/loaderTwo'

//api
import Api from '@/services/api'

//utils
import { convertDate } from '@/utils/convertDate'
import Link from 'next/link'

type Post = {
    author: string,
    title: string,
    paragraphs: string[],
    picture: string,
    date: string,
    id: string
}

//post page - blog system
const Post: React.FC = () => {

    const [post, setPost] = useState<Post | null>(null)
    const [recentPosts, setRecentPosts] = useState<any>([])
    const [loadRecentPosts, setLoadRecentPosts] = useState<boolean>(true)

    const router = useRouter()

    useEffect(() => {

        //fetch post 
        const fetchPost = async () => {

            let postId = location.pathname.split('/').pop()

            try {
                let response = await Api.get("/read-post?postId=" + postId)
                if (response.status === 200 && response.data.success) {

                    let postData = response.data.post

                    let filterPost: Post = {
                        author: postData.author,
                        title: postData.title,
                        paragraphs: postData.content.split('\n'),
                        picture: postData.picture,
                        date: convertDate(postData.createdAt),
                        id: postData._id
                    }

                    setPost(filterPost)
                }
                
            } catch (error) {
                console.log(error)
            }

        }
        fetchPost()

        //fetch recent posts
        const fetchRecentPosts = async () => {

            try {
                let response = await Api.get('/read-posts')
                setLoadRecentPosts(false)
                if(response.status === 200 && response.data.success){

                    let posts = response.data.posts

                    let filter_posts = posts.slice(0,4)

                    setRecentPosts(filter_posts)
                    
                    return 
                }

                setRecentPosts([])
            } catch (error) {
                console.log(error)
                setRecentPosts([])
            }

        }

        fetchRecentPosts()

    }, [])

    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <Navbar />
            <div className={styles.page_post}>
                <div className={styles.header} style={{backgroundImage: `url(${post?.picture})`}}>
                    <span>
                        <p>{post?.date} by {post?.author}</p>
                        <h4>{post?.title}</h4>
                    </span>
                </div>
                <div className={styles.body}>
                    <div className={styles.post}>
                        <img src={post?.picture} alt="" />
                        <article className={styles.text_post}>
                            {
                                post?.paragraphs.map( (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))
                            }
                        </article>
                    </div>
                    <div className={styles.info_about_post}>
                        <div className={styles.recent_posts}>
                            <h4>RECENT POSTS</h4>
                            {
                                loadRecentPosts ?
                                    <div 
                                        style={{
                                            display: "flex", 
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: "20px"
                                        }}
                                    >
                                        <LoaderTwo/>
                                    </div>
                                :
                                recentPosts.map( (recent: any, index: number) => (
                                    <div className={styles.list} key={index}>
                                        <span>
                                            <a href={"/blog/"+recent._id}>
                                                <p>{recent.title}</p>
                                            </a>
                                            <small>{convertDate(recent.createdAt)}</small>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Comments postId={post?.id}/>
            </div>
            <Footer />
        </>
    )
}

export default Post