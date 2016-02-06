var React = require('react');
var Link = require('react-router').Link;

var Reqwest = require('reqwest');


module.exports = React.createClass({

  _fetchEntry: function(entryID) {
    var _this = this,
        url = 'http://localhost:3000/api/entries/' + entryID;

    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: function(response) {
        _this.setState({ entry: response.entry });
      },
      error: function(error) {
        console.error(error.response);
      }
    });
  },

  getInitialState: function() {
    return {
      entry: {}
    };
  },

  componentDidMount: function() {
    this._fetchEntry(this.props.params.id);
  },

  render: function() {
    return (
      <div className='col-md-4'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h3 className='panel-title'>
              {this.state.entry.id}:
              {this.state.entry.name}
            </h3>
          </div>
          <div className='panel-body'>
            <dl>
              <dt>Number</dt>
              <dd>{this.state.entry.number}</dd>
              <dt>Email</dt>
              <dd>{this.state.entry.email}</dd>
              <dt>Description</dt>
              <dd>{this.state.entry.description}</dd>
            </dl>
          </div>
          <div className='panel-footer'>
            <Link to='/' className='btn btn-primary'>
              <span className='glyphicon glyphicon-chevron-left'></span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

});
