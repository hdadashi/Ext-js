Ext.define('ModernApp.view.setting.SettingController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.settingcontroller',

  onSubmit: function () {
    var firstName = document.getElementsById('fname');
    var lastName = document.getElementsById('lname');
    if (firstName.length < 3) {
      Ext.Msg.alert('Failed!', 'Wrong Name');
      alert('Please enter your name');
    }
    if (lastName.length < 3) {
      showMessage('Please enter your last name currectly', 'danger');
    }
  }
});
