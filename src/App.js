import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import style from './App.css'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
