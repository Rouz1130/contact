import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ({
      contacts: $.getJSON('/api/contacts'),
      contact2: $.getJSON('/api/contact/2')
  });

  // actions: {
  //   saveContact3(params) {
  //   var newContact = this.store.createRecord('contact', params);
  //   newContact.save();
  //   this.transitionTo('index');
  // },
// if each key in the params is NOT defined take contact and set property that matches current key, to the value of the current key. We do this because we assure the properties the user has update wil be changed properly do what the user wants updated/edited. if we dont do this we get an error of undefined.
  // update(contact, params) {
  //   Object.keys(params).forEach(function(key) {
  //     if(params[key] !==undefined) {
  //       contact.set(key,params[key]);
  //     }
  //   });
  //   contact.save();
  //   this.transitionTo('index');
  // },
  //
  //   destroyContact(contact) {
  //     contact.destroyRecord();
  //     this.transitionTo('index');

  }
});
