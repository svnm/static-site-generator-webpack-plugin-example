import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <nav className={style.navContainer}>
        <Link to="/home"  className={style.logo}>Radness Tech Inc.</Link>
        <div className={style.linkContainer}>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/jsing">Jsing</Link>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/styling">Styling</Link>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}
