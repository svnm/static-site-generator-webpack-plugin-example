import React from 'react'
import styles from './Home.css'
import common from '../Common.css'
Object.assign(styles, common)

import radImg from '../../assets/images/radness.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.Page}>
        <h1 className={styles.PageTitle}>Radness Tech Inc.</h1>
        <div className={styles.PageInner}>
          <img className={`${styles.Img} ${styles.ImgCenter}`} src={radImg} />
          <p>Welcome to Radness Tech... An innovative company working on some cool and one might say radical technologies.</p>
        </div>
      </div>
    )
  }
}
