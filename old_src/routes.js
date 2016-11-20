import React from 'react'
import { IndexRoute, Route, Redirect } from 'react-router'

import Main from './pages/Main'
import About from './pages/About'
import Home from './pages/Home'

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
  </Route>
)
