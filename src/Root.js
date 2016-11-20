import React from 'react'
import icon from './assets/images/favicon.ico'

export default class Root extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css"/>
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
            <div id='outlet' className="container">
                  {this.props.children}
            </div>
            <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
