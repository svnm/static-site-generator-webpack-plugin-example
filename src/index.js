import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, withRouter } from 'react-router'
import { createMemoryHistory } from 'history'
import Template from './Template'

//import Routes from './routes'
import {Route} from 'react-router-dom'
import App from './App'
import Home from './pages/Home/Home'
import Tech from './pages/Tech/Tech'
import Contact from './pages/Contact/Contact'

const SSRoutes = (
  <Route component={App}>
    <Route exact path='/' component={Home}/>
    <Route path='/tech' component={Tech}/>
    <Route path='/contact' component={Contact}/>
  </Route>
)

const Routes = withRouter(SSRoutes)

/* Exported static site renderer */
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  const context = {}

  //routes: Routes,
  var html = ReactDOMServer.renderToStaticMarkup(
    <Template>
      <StaticRouter location={location} context={context}>
        <Routes />
      </StaticRouter>
    </Template>
  )
  callback(null, html)
}
