import Route from '@ember/routing/route';
import Service, { inject as service } from '@ember/service';
export default class ContactListEditRoute extends Route {
  templateName = 'contact/new';
  controllerName = 'contact/new';
  @service store;
  model(params) {
    return this.store.findRecord('contact', params.id);
  }
}
