var keymirror = require('keymirror');


module.exports = {

  ActionTypes: keymirror({
    FETCH_ENTRIES: null,
    RECEIVE_ENTRIES: null,

    FETCH_ENTRY: null,
    RECEIVE_ENTRY: null,

    CREATE_ENTRY: null,
    RECEIVE_CREATED_ENTRY: null
  })

}
