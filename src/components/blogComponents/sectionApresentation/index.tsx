import Link from 'next/link'
import React from 'react'
import styles from './index.module.css'

//apresentation section - blog page
const SectionApresentation: React.FC = () => {
    return (
        <section className={styles.apresentation_section}>
            <h4>BLOG</h4>
            <span>
                <Link href="/admin-login">
                    <img 
                        src="/img/admin.png" 
                        alt="admin-login" 
                        style={{
                            width: "30px", 
                            height: "30px",
                            position: "absolute",
                            top: "5%",
                            right: "3%",
                            cursor: "pointer",
                            zIndex: 20
                        }}
                    />
                </Link>
            </span>
        </section>
    )
}

export default SectionApresentation