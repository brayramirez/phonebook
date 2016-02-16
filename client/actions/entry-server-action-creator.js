var EntryConstants = require('../constants/entry-constants.js');
var ActionTypes = EntryConstants.ActionTypes;

var PhonebookDispatcher = require('../dispatcher/phonebook-dispatcher.js');


module.exports = {

  receiveEntries: function(response) {
    PhonebookDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_ENTRIES,
      response: response
    });
  },

  receiveEntry: function(response) {
    PhonebookDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_ENTRY,
      response: response
    });
  },

  receiveCreatedEntry: function(response) {
    PhonebookDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_ENTRY,
      response: response
    });
  }

}
