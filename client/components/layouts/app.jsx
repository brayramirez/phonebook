var React = require('react');


module.exports = React.createClass({

  render: function() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>Phonebook</h1>
        </div>
        {this.props.children}
      </div>
    );
  }

});
