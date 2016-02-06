var React = require('react');


module.exports = React.createClass({

  render: function(){
    return (
      <tr>
        <td>{this.props.entry.id}</td>
        <td>{this.props.entry.name}</td>
      </tr>
    );
  }

});
