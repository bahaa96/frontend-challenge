import React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';
import { ROUTES } from './routes';
import 'antd/dist/antd.css';


import './api/injectApiMock'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          ROUTES.map((routeProps: RouteProps, index: number) => {
            return (
              <Route {...routeProps} key={index} />
            )
          })
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
