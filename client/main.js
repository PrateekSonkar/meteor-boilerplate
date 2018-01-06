import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router';
import {Tracker} from 'meteor/tracker';
import {routes,onAuthChange}  from './../imports/routes/routes';
import '../imports/startup/simple-schema-config';



Tracker.autorun(()=>{
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);

});


Meteor.startup(() => {  
  ReactDOM.render(routes,document.getElementById('app'));
})