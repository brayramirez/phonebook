var Reqwest = require('reqwest');

var EntryServerActionCreator = require('../actions/entry-server-action-creator.js');


module.exports = {

  fetchEntries: function() {
    Reqwest({
      url: 'http://localhost:3000/api/entries',
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: function(response){
        EntryServerActionCreator.receiveEntries(response);
      },
      error: function(error){
        console.error(error.message);
      }
    });
  },

  fetchEntry: function(id) {
    var url = 'http://localhost:3000/api/entries/' + id;

    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: function(response) {
        EntryServerActionCreator.receiveEntry(response);
      },
      error: function(error) {
        console.error(error.response);
      }
    });
  },

  createEntry: function(params) {
    Reqwest({
      url: 'http://localhost:3000/api/entries',
      type: 'json',
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({ entry: params }),
      success: function(response) {
        EntryServerActionCreator.receiveCreatedEntry(response);
      },
      error: function(error) {
        console.error(error.response);
      }
    });
  }

}
