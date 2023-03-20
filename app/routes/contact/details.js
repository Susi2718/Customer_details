import Route from '@ember/routing/route';
import Service, { inject as service } from '@ember/service';
export default class ContactDetailsRoute extends Route {
  @service store;
  model(params) {
    let controller = this.controllerFor('contact');
    controller.isShowDetails = true;
    return this.store.findRecord('contact', params.id);
    
  }
}
