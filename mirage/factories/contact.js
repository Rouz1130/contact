import { Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return (faker.name.firstName() + ' ' + faker.name.lastName() + ': ' + (i+1)); },
  contact() {
    return (faker.name.firstName() + ' ' + faker.name.lastName());
  },
  age: "test@test.test"
  // occupation:"test occupation",
  // resides: "test resides",
  // email: "test email",
  // image: "test image"
});
