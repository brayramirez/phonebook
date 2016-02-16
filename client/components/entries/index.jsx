var React = require('react');

var NewForm = require('./_form.jsx');
var List = require('./_list.jsx');


module.exports = React.createClass({

  render: function(){
    return (
      <div>
        <NewForm />
        <List />
      </div>
    );
  }

});
