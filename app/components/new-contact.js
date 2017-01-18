import Ember from 'ember';

export default Ember.Component.extend({
  addNewContact: false,
  actions: {
  contactFormShow() {
    this.set('addNewContact', true);
  },

    saveContact1() {
      var params = {
        name: this.get('name'),
        age: this.get('age'),
        occupation: this.get('occupation'),
        resides: this.get('resides'),
        email: this.get('email'),
        image: this.get('image'),
      };
      this.set('addNewContact', false);
      this.sendAction('saveContact2', params);
    }
  }
});
