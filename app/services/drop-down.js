import Service from '@ember/service';
import { inject as service } from '@ember/service';
export default class DropDownService extends Service {
  @service store;
  get Gender() {
    return this.store.findAll('gender');
  }
}
