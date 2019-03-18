import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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

/*
* {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  font-family: 'Source Sans Pro', sans-serif;
}
body {
  margin: 0;
}
*/
