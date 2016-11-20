import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App.js'
import Home from './pages/Home/Home.js'
import Jsing from './pages/Jsing/Jsing.js'
import Styling from './pages/Styling/Styling.js'
import Contact from './pages/Contact/Contact.js'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/jsing' component={Jsing}/>
    <Route path='/styling' component={Styling}/>
    <Route path='/contact' component={Contact}/>
  </Route>
)
