import {Meteor} from 'meteor/meteor';
import React from 'react';
import { Router,  Route,   Link, Switch } from 'react-router-dom';
import history from './../ui/history';
import {withRouter} from 'react-router';



import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';

// const ChangeTracker = withRouter(({match, location, history}) => {
//     console.log(action, location.pathname, location.state);
//     return false;
// });
const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/dashboard'];
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    history.push('/dashboard');
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);  
  if(isUnauthenticatedPage && isAuthenticated){
    history.replace('/dashboard');
  } else if(authenticatedPages && !isAuthenticated){
    history.replace('/');
  }
}

export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route component={NotFound}/>
      </Switch>      
    </div>
  </Router>
)