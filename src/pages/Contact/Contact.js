import React from 'react'
import styles from './Contact.css'
import common from '../Common.css'
Object.assign(styles, common)

import radImg from '../../assets/images/radness.jpg'

export default class Contact extends React.Component {
  render() {
    return (
      <div className={styles.Page}>
        <h1 className={`${styles.PageTitle} ${styles.ContactTitle}`}>Contact Radness</h1>
        <div className={styles.PageInner}>
          <img className={`${styles.Img} ${styles.ImgCenter}`} src={radImg} />
          <p>Come visit radness tech and become one of us.</p>
          <a className={styles.ContactUs} href="mailto:radnesstech@radnesstech.io">Email: radnesstech@radnesstech.io</a>
        </div>
      </div>
    )
  }
}
