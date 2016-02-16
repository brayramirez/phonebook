var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var EntryViewActionCreator = require('../../actions/entry-view-action-creator.js');
var EntryStore = require('../../stores/entry-store.js');

var EntryComponent = require('./_entry.jsx');


module.exports = React.createClass({

  _entries: function(){
    var rows = this.state.entries.map(function(entry){
      return <EntryComponent key={entry.id} entry={entry} />;
    });

    return rows;
  },

  _onChange: function() {
    this.setState({ entries: EntryStore.getEntries() });
  },

  getInitialState: function(){
    return {
      entries: []
    }
  },

  componentDidMount: function(){
    EntryStore.addChangeListener( this._onChange );

    EntryViewActionCreator.fetchEntries();
  },

  componentWillUnmount: function() {
    EntryStore.removeChangeListener( this._onChange );
  },

  render: function() {
    return (
      <div className='row'>
        <ReactCSSTransitionGroup transitionName='fade' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this._entries()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

});
