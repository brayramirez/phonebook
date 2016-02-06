var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var EntryComponent = require('./_entry.jsx');

module.exports = React.createClass({

  _entries: function(){
    var rows = this.props.entries.map(function(entry){
      return <EntryComponent key={entry.id} entry={entry} />;
    });

    return rows;
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
