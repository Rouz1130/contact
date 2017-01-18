import DS from 'ember-data';

export default DS.Model.extend({
name: DS.attr(),
age: DS.attr(),
occupation: DS.attr(),
resides: DS.attr(),
email: DS.attr(),
image:DS.attr()
});
