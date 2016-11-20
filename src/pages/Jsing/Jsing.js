import React from 'react'
import style from './Jsing.css'

export default class Jsing extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Jsing...</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
            <p>Here are some js technologies we are playing around with</p>
          </div>
        </div>
      </div>
    )
  }
}
