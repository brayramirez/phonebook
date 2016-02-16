var React = require('react');

var EntryViewActionCreator = require('../../actions/entry-view-action-creator.js');


module.exports = React.createClass({

  _clearFields: function() {
    this.refs.nameField.value = '';
    this.refs.numberField.value = '';
    this.refs.emailField.value = '';
    this.refs.descriptionField.value = '';
  },

  _handleSubmit: function(e) {
    e.preventDefault();

    var _this = this;

    var params = {
      name: this.refs.nameField.value,
      number: this.refs.numberField.value,
      email: this.refs.emailField.value,
      description: this.refs.descriptionField.value
    };

    EntryViewActionCreator.createEntry(params);
  },

  _handleCancel: function(e) {
    e.preventDefault();

    this._clearFields();
  },

  render: function() {
    return (
      <form className='form-horizontal' onSubmit={this._handleSubmit}>
        <div className='form-group'>
          <label className='col-md-2 control-label' htmlFor='name-field'>
            Name
          </label>
          <div className='col-md-10'>
            <input type='text' className='form-control' id='name-field' placeholder='Name' ref='nameField' />
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-2 control-label' htmlFor='number-field'>
            Number
          </label>
          <div className='col-md-10'>
            <input type='text' className='form-control' id='number-field' placeholder='Number' ref='numberField' />
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-2 control-label' htmlFor='email-field'>
            Email
          </label>
          <div className='col-md-10'>
            <input type='email' className='form-control' id='email-field' placeholder='Email' ref='emailField' />
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-2 control-label' htmlFor='description-field'>
            Description
          </label>
          <div className='col-md-10'>
            <textarea className='form-control' rows='3' ref='descriptionField' />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-md-10 col-md-offset-2'>
            <button type='submit' className='btn btn-primary'>Save</button>
            {' '}
            <a href='#' className='btn btn-default' onClick={this._handleCancel}>Cancel</a>
          </div>
        </div>
      </form>
    )
  }

});
