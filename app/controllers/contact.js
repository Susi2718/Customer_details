import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { action } from '@ember/object';
export default class ContactController extends Controller {
  @service store;
  @service router;
  queryParams = ['id'];
  @tracked id = null;
  @tracked model;
  @tracked isShowDetails;

  @action addNew() {
    this.router.transitionTo('contact.new');
  }
  @action edit(id) {
    this.router.transitionTo('contact.edit', id);
  }

  @action async deleteContact(id) {
    await this.store.findRecord('contact', id).then(function (contactreturned) {
      contactreturned.deleteRecord();
      contactreturned.isDeleted;
      contactreturned.save();
    });
  }

  @action closeDetails() {
    this.isShowDetails=false;
    this.router.transitionTo('contact');
  }

  @action showDetails(id) {
    this.router.transitionTo('contact.details', id);
  }
}
