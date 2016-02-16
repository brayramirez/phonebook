var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;


// var EntriesComponent = require('./components/entries/index.jsx');
var history = require('./config/history.jsx');
var routes = require('./config/routes.jsx');


ReactDOM.render(<Router history={history}>{routes}</Router>,
  document.getElementById('react-container'));
