import React from 'react';
import logo from './logo.svg';
import routerMap from './routerMap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './assets/scss/index.scss';

function App(props) {

  return (
    <div className="App">
      <Router>
        <Switch>
          { 
            routerMap && routerMap.length > 0 && routerMap.map((route, index) =>
              <Route key={index} 
                     path={route.path} 
                     component={route.component} 
                     exact={route.isExact} 
              />  
            )
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
