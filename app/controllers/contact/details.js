import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default class ContactDetailsController extends Controller {
  @service store;
  @service router;
  @service ContactList;
  //ContactList = this.ContactList.allContacts;
  @action
  closeDetails() {
    this.isShowDetails=false;
    this.router.transitionTo('contact', { queryParams: { id: null } });
  }

  @action
  showDetails(id) {
    // console.log('details',id)
    this.router.transitionTo('contact.details', id);
  }
}
