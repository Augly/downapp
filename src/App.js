/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 10:54:28
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 10:49:23
 */
import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import routers from "./router/router.js"

function App() {
  return (
    <Router>

        {
          routers.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component} />
            )
          })
        }
    </Router>
  );
}

export default App;
