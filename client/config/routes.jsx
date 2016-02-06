var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

// Components
var App = require('../components/layouts/app.jsx');
var Index = require('../components/entries/index.jsx');
var Show = require('../components/entries/show.jsx');


module.exports = (
  <Route path='/' component={App} >

    <IndexRoute component={Index} />

    <Route path='/entries/:id' component={Show} />

  </Route>
);
