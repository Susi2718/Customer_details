import Model, { attr } from '@ember-data/model';
import { modelValidator } from 'ember-model-validator';

@modelValidator
export default class ContactModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr gender;
  @attr phoneNumber;
  @attr email;
  @attr organisationName;
  @attr city;
  @attr country;
  @attr zip;

  validations = {
    firstName: {
      presence: { is: true, message: 'first name is required' },
    },
    lastName: {
      presence: { is: true, message: 'last name is required' },
    },
    gender: {
      presence: { is: true, message: 'gender is required' },
    },
    phoneNumber: {
      numericality: { is: true, message: 'Must be a valid number' },
    },
    email: {
      email: { is: true, message: 'email is in-valid' },
      // message: 'Email is required'
    },
    organisationName: {
      presence: { is: true, message: 'organisation name is required' },
    },
    city: {
      presence: { is: true, message: 'city is required' },
    },
    country: {
      presence: { is: true, message: 'country is required' },
    },
    zip: {
      zipCode: { is: true, message: 'zip code is invalid' },
    },
  };
}
