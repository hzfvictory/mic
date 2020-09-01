import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {renderRoutes} from 'react-router-config'
import routes from "./router"

import {Provider} from 'react-redux'
import store from './models/dva';

import 'antd/dist/antd.css';

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/menu/react" : "";


function App() {
  return (
    <Provider store={store}>
      <Router basename={BASE_NAME}>
        <Switch>
          {renderRoutes(routes.routes)}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;