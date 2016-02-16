var EntryConstants = require('../constants/entry-constants.js');
var ActionTypes = EntryConstants.ActionTypes;

var PhonebookDispatcher = require('../dispatcher/phonebook-dispatcher.js');

var EntryAPIUtils = require('../utils/entry-api-utils.js');


module.exports = {

  fetchEntries: function() {
    PhonebookDispatcher.handleViewAction({
      type: ActionTypes.FETCH_ENTRIES
    });
    EntryAPIUtils.fetchEntries();
  },

  fetchEntry: function(id) {
    PhonebookDispatcher.handleViewAction({
      type: ActionTypes.FETCH_ENTRY
    });
    EntryAPIUtils.fetchEntry(id);
  },

  createEntry: function(params) {
    PhonebookDispatcher.handleViewAction({
      type: ActionTypes.CREATE_ENTRY
    });
    EntryAPIUtils.createEntry(params);
  }


}
