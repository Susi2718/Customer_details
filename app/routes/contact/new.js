import Route from '@ember/routing/route';
import Service, { inject as service } from '@ember/service';
export default class ContactListNewRoute extends Route {
  @service store;
  model() {
    return this.store.createRecord('contact');
    // return {
    //   firstName: '',
    //   lastName: '',
    //   gender: '',
    //   phoneNumber: '',
    //   email: '',
    //   organisationName: '',
    //   city: '',
    //   country: '',
    //   zip: '',
    // };
  }
}
