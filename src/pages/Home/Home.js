import React from 'react'
import radImg from '../../assets/images/radness.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div className='Page'>
        <h1 className='PageTitle'>Radness Tech Inc.</h1>
        <div className='PageInner'>
          <img className='Img ImgCenter' src={radImg} />
          <p>Welcome to Radness Tech... An innovative company working on some cool and one might say radical technologies.</p>
        </div>
      </div>
    )
  }
}
