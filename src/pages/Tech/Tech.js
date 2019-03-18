import React from 'react'

import reactImg from '../../assets/images/react.png'
import cssImg from '../../assets/images/cssmodules.png'
import webpackImg from '../../assets/images/webpack.png'

export default class Tech extends React.Component {
  render() {
    return (
      <div className='Page'>
        <h1 className='PageTitle TechTitle'>Tech...</h1>
        <div className='PageInner'>
          <img className='Img' src={reactImg} />
          <img className='Img' src={webpackImg} />
          <img className='Img' src={cssImg} />
          <p>Here are some technologies we are playing around with at Radness</p>
        </div>
      </div>
    )
  }
}

/*
.TechTitle {
  color: #105db2 !important;
}
*/
