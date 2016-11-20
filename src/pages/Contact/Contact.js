import React from 'react'
import style from './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Radnesstech Inc.</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
          Come visit radnesstech to work with us and become one of us. You won't regret it.
          </div>
          <a className={style.contactStyle} href="mailto:radnesstech@radnesstech.io">Email: radnesstech@radnesstech.io</a>
        </div>
      </div>
    )
  }
}
