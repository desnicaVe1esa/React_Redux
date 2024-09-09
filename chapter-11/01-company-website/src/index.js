import React from 'react'
import { render } from 'react-dom'

import {
  HashRouter, /*
                 HashRouter - отображается в качестве корневого компонента приложения. Каждый маршрут может быть
                 определен внутри HashRouter с помощью компонента Route
               */
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './pages'

window.React = React
// Switch - аналог switch-case. Если ни один маршрут в Route не найден, то вернется компонент Whoops404
render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Redirect - используется, когда возникает потребность перенаправить пользователя с одного маршрута на другой */}
        <Redirect from="/history" to="/about/history" />
        <Redirect from="/services" to="/about/services" />
        <Redirect from="/location" to="/about/location" />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('react-container')
)
