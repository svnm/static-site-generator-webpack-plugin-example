import React from 'react'
import style from './Styling.css'

export default class Styling extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Styling...</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
            <p>Here are some css technologies we are playing around with</p>
          </div>
        </div>
      </div>
    )
  }
}
