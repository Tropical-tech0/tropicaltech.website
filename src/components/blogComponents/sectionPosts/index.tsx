import React from 'react'
import styles from './index.module.css'

type Post = {
  title: string,
  description: string,
  imgUrl: string,
  date: string
}

const posts: Post[] = [
  {
    title: "ROUTINE CHECK ON YOUR BUSINESS TECH TOOL",
    description: "A business tech tools refers to all the tech apparatus…",
    imgUrl: "/img/posts/post-one.png",
    date: "09/14/2022"
  }
]

const SectionPosts: React.FC = () => {
  return (
    <section className={styles.posts_section}>
      {
        posts.map((post: Post, index: number) => (
          <div className={styles.post} key={index}>
            <img src={post.imgUrl} alt={post.title} />
            <span>
              <small>{post.date}</small>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            </span>
            <div className={styles.read_more_button}>Read more</div>
          </div>
        ))
      }
    </section>
  )
}

export default SectionPosts