import React from 'react'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import style from './App.css'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div>RadTech... radical technologies for you to play with</div>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
