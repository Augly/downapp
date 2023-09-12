/*
 * @Descripttion : 
 * @version      : 1.0.0
 * @Author       : 
 * @Date         : 2023-08-02 13:49:17
 * @LastEditors  : 
 * @LastEditTime : 2023-09-12 11:31:58
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 10:54:28
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 10:49:23
 */
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import routers from "./router/router.js"

function App () {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
