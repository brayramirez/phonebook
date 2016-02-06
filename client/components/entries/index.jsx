var React = require('react');


var EntryComponent = require('./_entry.jsx');

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

  _rows: function(){
    var rows = this.state.entries.map(function(entry){
      return <EntryComponent key={entry.id} entry={entry} />;
    });

    return rows;
  },

  _onClick: function(){
    this.setState({
      isVisibleComponent: !this.state.isVisibleComponent
    });
  },

  _visibleComponent: function(){
    if (!this.state.isVisibleComponent) return null;

    return (
      <div>
        Hello World!
      </div>
    );
  },

  getInitialState: function(){
    return {
      entries: [],
      isVisibleComponent: false
    }
  },

  componentDidMount: function(){
    this._fetchEntries();
  },

  render: function(){
    return (
      <div>
        {this._visibleComponent()}
        <a href='#' onClick={this._onClick}>Show Component</a>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this._rows()}
          </tbody>
        </table>
      </div>
    );
  }


});
