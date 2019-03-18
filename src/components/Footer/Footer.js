import React from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='FooterContent'>
          <div className='Links'>
            <Link className='Link' to="/">Home</Link>
            <Link className='Link' to="/tech">Tech</Link>
            <Link className='Link' to="/contact">Contact</Link>
          </div>
          <div className='Copyright'>Site by Radness Tech 2016</div>
        </div>
      </footer>
    )
  }
}

/*
.Footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 50px;
}
.FooterContent {
  display: flex;
  justify-content: space-around;
  background-color: #333333;
  height: 50px;
}
.Links {
  min-width: 200px;
  display: flex;
  justify-content: space-around;
}
.Link {
  display: flex;
  align-items: center;
  color: #fff;
}
.Link:hover {
  color: #faa916;
}
.Copyright {
  color: white;
  display: flex;
  align-items: center;
}
*/
