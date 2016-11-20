import React from 'react'
import style from './Home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Radnesstech Inc.</div>
        <div className={style.paragraphContainer}>
          <div className={style.sectionContainer}>
            <div className={style.sectionText}>
            <p>
              Welcome to Radnesstech... An innovative company which works with some really cool and one might say radical technologies.
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
