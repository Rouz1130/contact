import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateContactForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(contact, params) {
      this.sendAction('update', contact, params);
    },
    delete(contact) {
      if (confirm('Are you sure you want to delete'))
  {
    this.sendAction('destroyContact', contact);
      }
    }
  }
});
