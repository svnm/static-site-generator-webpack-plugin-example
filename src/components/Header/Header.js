import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <nav className={style.Header}>
        <Link to="/"  className={style.Logo}>Radness Tech Inc.</Link>
      </nav>
    )
  }
}
