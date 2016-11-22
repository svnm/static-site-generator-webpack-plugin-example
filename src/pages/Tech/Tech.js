import React from 'react'
import styles from './Tech.css'
import common from '../Common.css'
Object.assign(styles, common)

import reactImg from '../../assets/images/react.png'
import cssImg from '../../assets/images/cssmodules.png'
import webpackImg from '../../assets/images/webpack.png'

export default class Tech extends React.Component {
  render() {
    return (
      <div className={styles.Page}>
        <h1 className={`${styles.PageTitle  } ${styles.TechTitle}`}>Tech...</h1>
        <div className={styles.PageInner}>
          <img className={styles.Img} src={reactImg} />
          <img className={styles.Img} src={webpackImg} />
          <img className={styles.Img} src={cssImg} />
          <p>Here are some technologies we are playing around with at Radness</p>
        </div>
      </div>
    )
  }
}
