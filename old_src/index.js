import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, createMemoryHistory, browserHistory } from 'react-router'

import routes from './routes'
import template from './template'
import Main from './pages/Main'

if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet');
  ReactDOM.render(<Router history={browserHistory} routes={routes} />, outlet);
}

export default function(locals, callback) {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  return match({
    routes: routes,
    location: location
  }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToStaticMarkup(
      <RouterContext {...renderProps} />
    )
    return callback(null, template({ html }))
  })
}
