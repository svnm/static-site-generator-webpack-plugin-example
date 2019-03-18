import React from 'react'
import {Route} from 'react-router-dom'
import App from './App'
import Home from './pages/Home/Home'
import Tech from './pages/Tech/Tech'
import Contact from './pages/Contact/Contact'

module.exports = (
  <Route component={App}>
    <Route exact path='/' component={Home}/>
    <Route path='/tech' component={Tech}/>
    <Route path='/contact' component={Contact}/>
  </Route>
)
