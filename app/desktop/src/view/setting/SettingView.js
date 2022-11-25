
Ext.define('ModernApp.view.setting.setting', {
  xtype: 'setting',
  cls: 'setting',
  extend: 'Ext.Carousel',
  controller: { type: 'settingcontroller' },
  defaults: {
    styleHtmlContent: true
  },

  items: [
    {
      html: `<h2 class="headerSetting">Change Information</h2>

      <form action="/actionPage" method="post">
        <label for="fname" style='color: black'>First name:</label><br>
        <input type="text" id="fname" name="fname" value="" placeholder = "Enter your firstname" required><br><br>
        <label for="lname" style='color: black'>Last name:</label><br>
        <input type="text" id="lname" name="lname" value="" placeholder = "Enter your lastname" required><br><br>
        <button class="buttonSetting"><span>Submit</span></button>
      </form>`,
      style: 'background-color: #e1e2e1'
    },
    {
      html: 'Item 2',
      style: 'background-color: #759E60'
    },
    {
      html: 'Item 3'
    }
  ],
  listeners: {
    click: 'onSubmit'
  }
});
