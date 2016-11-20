import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footContainer}>
        <div className={style.contentContainer}>
          <div className={style.linkContainer}>
            <IndexLink className={style.linkBox} to="/">Home</IndexLink>
            <Link className={style.linkBox} to="/jsing">Jsing</Link>
              <Link className={style.linkBox} to="/styling">Styling</Link>
            <Link className={style.linkBox} to="/contact">Contact</Link>
          </div>
          <div className={style.copyright}>Site by Radness Tech 2016</div>
        </div>
      </footer>
    )
  }
}
