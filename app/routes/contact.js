import Route from '@ember/routing/route';
import Service, { inject as service } from '@ember/service';
export default class ContactRoute extends Route {
  @service store;
  model() {
    return this.store.query('contact', {});
  }
}
