var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var PhonebookConstants = require('../constants/phonebook-constants.js');

var EntryConstants = require('../constants/entry-constants.js');
var ActionTypes = EntryConstants.ActionTypes;

var PhonebookDispatcher = require('../dispatcher/phonebook-dispatcher.js');

var _entries = [],
    _entry = {
      id: 0,
      name: '',
      number: '',
      email: '',
      description: '',
    };


var EntryStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(PhonebookConstants.CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(PhonebookConstants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(PhonebookConstants.CHANGE_EVENT, callback);
  },

  getEntries: function() {
    return _entries;
  },

  getEntry: function() {
    return _entry;
  }

});


EntryStore.dispatchToken = PhonebookDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type){

    case ActionTypes.RECEIVE_ENTRIES:
      _entries = action.response.entries;

      EntryStore.emitChange();
      break;

    case ActionTypes.RECEIVE_ENTRY:
      _entry = action.response.entry;

      EntryStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_ENTRY:
      _entries.unshift(action.response.entry);

      EntryStore.emitChange();
      break;

    default:
      // Do nothing
  }

});


module.exports = EntryStore;
