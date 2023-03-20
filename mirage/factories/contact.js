import { Factory } from 'ember-cli-mirage';
import { faker } from '@faker-js/faker';
export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  gender() {
    return faker.name.sex();
  },
  phoneNumber() {
    return faker.phone.number('901-###-###');
  },
  email() {
    return faker.internet.email();
  },
  organisationName() {
    return faker.company.name();
  },
  city() {
    return faker.address.city();
  },
  country() {
    return faker.address.country();
  },
  zip() {
    return faker.address.zipCode();
  },
});
