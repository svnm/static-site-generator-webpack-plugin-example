import React, { Component } from 'react'
import { Link } from 'react-router'

import bigCat from './assets/big_cat.jpeg'

const Links = (props) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default class Main extends Component {
  render() {
    let imageStyle = {
      maxHeight: '200px',
      maxWidth: '200px'
    }

    return (
      <div>
        <Links />
        {this.props.children}
        <img style={imageStyle} src={bigCat} />
      </div>
    )
  }
}
