import React, { useEffect, useState } from 'react'
import { BrowserRouter, HashRouter, NavLink, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Data from './Data'
import Router from './router/router'

function App() {
  const [value, setValue] = useState('')
  return (
    <HashRouter>
      <div className="App">
        <div>{value}</div>
        <div className='menu'>
          {Router.map((item, index) => {
            return <NavLink
              to={item.path}
              activeClassName='acv'
              exact={item.isExact}
            >
              {item.title}
            </NavLink>
          })}


        </div>
        <div className='container'>
          <Switch>
            {Router.map((item, index) => {
              return (<Route
                key={index}
                exact={item.isExact}
                path={item.path}
                render={(props) => {
                  return item.render(props, value, setValue)
                }}>
              </Route>)
            })}
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
