import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.Footer}>
        <div className={style.FooterContent}>
          <div className={style.Links}>
            <IndexLink className={style.Link} to="/">Home</IndexLink>
            <Link className={style.Link} to="/tech">Tech</Link>
            <Link className={style.Link} to="/contact">Contact</Link>
          </div>
          <div className={style.Copyright}>Site by Radness Tech 2016</div>
        </div>
      </footer>
    )
  }
}
