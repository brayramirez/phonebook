var React = require('react');


var NewForm = require('./_form.jsx');
var List = require('./_list.jsx');

var Reqwest = require('reqwest');


module.exports = React.createClass({

  _fetchEntries: function(){

    var _this = this;

    Reqwest({
      url: 'http://localhost:3000/api/entries',
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: function(results){
        _this.setState({
          entries: results.entries
        });
      },
      error: function(error){
        console.error(error.message);
      }
    });
  },

  _handleNewEntry: function(entry) {
    var entries = this.state.entries;

    entries.unshift(entry);

    this.setState({ entries: entries });
  },

  getInitialState: function(){
    return {
      entries: []
    }
  },

  componentDidMount: function(){
    this._fetchEntries();
  },

  render: function(){
    return (
      <div>
        <NewForm onNewEntry={this._handleNewEntry} />
        <List entries={this.state.entries} />
      </div>
    );
  }


});
