import React from 'react'
import radImg from '../../assets/images/radness.jpg'

export default class Contact extends React.Component {
  render() {
    return (
      <div className='Page'>
        <h1 className='PageTitle ContactTitle'>Contact Radness</h1>
        <div className='PageInner'>
          <img className='Img ImgCenter' src={radImg} />
          <p>Come visit radness tech and become one of us.</p>
          <a className='ContactUs' href="mailto:radnesstech@radnesstech.io">Email: radnesstech@radnesstech.io</a>
        </div>
      </div>
    )
  }
}
/*
.ContactTitle {
  color: #faa916;
}
.ContactUs {
  color: #0077b1;
  text-decoration: none;
  border-bottom: solid;
  border-bottom-width: 2px;
}
.ContactUs:hover {
  color: #faa916;
}
*/
