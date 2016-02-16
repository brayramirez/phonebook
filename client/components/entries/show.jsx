var React = require('react');
var Link = require('react-router').Link;

var EntryStore = require('../../stores/entry-store.js');
var EntryViewActionCreator = require('../../actions/entry-view-action-creator.js');


module.exports = React.createClass({

  _onChange: function() {
    this.setState({ entry: EntryStore.getEntry() });
  },

  getInitialState: function() {
    return {
      entry: {}
    };
  },

  componentDidMount: function() {
    EntryStore.addChangeListener( this._onChange );
    EntryViewActionCreator.fetchEntry(this.props.params.id);
  },

  componentWillUnmount: function() {
    EntryStore.removeChangeListener( this._onChange );
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
