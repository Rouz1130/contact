import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Contacts ${i+1}`;
  },
  name: "test name",
  age: "test@test.test"
  // occupation:"test occupation",
  // resides: "test resides",
  // email: "test email",
  // image: "test image"
});
