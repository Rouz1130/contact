import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('contact')
  },

  actions: {
    saveContact3(params) {
      var newContact = this.store.createRecord('contact', params);
      newContact.save();
      this.transitionTo('index');
    },

    update(contact, params) {
      debugger;
      contact.save();
      this.transitionTo('index');
    },

    destroyContact(contact) {
      contact.destroyContact();
      this.transitionTo('index');
    }
  }
});
