import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav className='Header'>
        <Link to="/"  className='Logo'>Radness Tech Inc.</Link>
      </nav>
    )
  }
}

/*
.Header {
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.Logo {
  color: #105db2;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  border-bottom: solid;
  border-bottom-width: 4px;
}
.Logo:hover {
  color: #faa916;
}
*/
