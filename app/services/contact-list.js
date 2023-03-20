import Service from '@ember/service';
import { inject as service } from '@ember/service';
export default class ContactListService extends Service {
  @service store;
  get allContacts() {
    return this.store.findAll('contact');
  }
}
