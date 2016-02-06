var React = require('react');
var Link = require('react-router').Link;


module.exports = React.createClass({

  _entryPath: function() {
    return '/entries/' + this.props.entry.id;
  },

  render: function(){
    return (
      <div className='col-md-4'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h3 className='panel-title'>
              {this.props.entry.id}:
              {this.props.entry.name}
            </h3>
          </div>
          <div className='panel-body'>
            <dl>
              <dt>Number</dt>
              <dd>{this.props.entry.number}</dd>
              <dt>Email</dt>
              <dd>{this.props.entry.email}</dd>
              <dt>Description</dt>
              <dd>{this.props.entry.description}</dd>
            </dl>
          </div>
          <div className='panel-footer'>
            <Link to={this._entryPath()}>Show</Link>
          </div>
        </div>
      </div>
    );
  }

});
