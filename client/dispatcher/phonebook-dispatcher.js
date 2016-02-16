var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PhonebookConstants = require('../constants/phonebook-constants.js');
var PayloadSources = PhonebookConstants.PAYLOAD_SOURCES;


var PhonebookDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };

    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };

    this.dispatch(payload);
  }

});


module.exports = PhonebookDispatcher;
