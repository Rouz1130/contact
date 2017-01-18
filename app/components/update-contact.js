import Ember from 'ember';

export default Ember.Component.extend({
  updateContactForm: false,
  actions: {
    updateContactForm() {
      this.set('updateContactForm', true);
    },

    update(contact) {
      var params = {
        name: this.get('name'),
        age: this.get('age'),
        occupation: this.get('occupation'),
        resides: this.get('resides'),
        email: this.get('email'),
        image: this.get('image'),
      };
      this.set('updateContactForm', false);
      this.sendAction('update', params);
    }
  }
});
