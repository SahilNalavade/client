import React from 'react'
import styles from '../styles/Authentication.module.css'

function DefaultLayout(props) {
  return (
    <div className={styles.layout}>

        <div className={styles.header}>
            <h1>CV</h1>
        </div>

        <div className={styles.content}>
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout