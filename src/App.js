import React from 'react';
import logo from './logo.svg';
import {inject, observer} from 'mobx-react';
import routerMap from './routerMap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './assets/scss/index.scss';
import cn from 'classnames';


function App(props) {

  const {store} = props;

  return (
    <div className={cn({nightMode : store.nightMode}, 'App')}>
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

export default inject('store')(observer(App));
