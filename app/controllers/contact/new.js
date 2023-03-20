import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default class ContactNewController extends Controller {
  @service store;
  @service router;
  @service DropDown;

  @tracked id;
  @tracked model;
  @tracked buttonText;
  @tracked Gender = this.DropDown.Gender;

  @computed('Gender', 'model')
  get title() {
    console.log(this.Gender);
    let data = this.model;
    if (data.id) {
      this.buttonText = 'Update';
      return 'Edit contact';
    } else {
      this.buttonText = 'Save';
      return 'Add new contact';
    }
  }

  @action
  async addNew(event) {
    let formdata = this.model;
    event.preventDefault();
    if (await formdata.validate()) {
      if (formdata.id) {
        formdata.save();
        this.router.transitionTo('contact.details', formdata.id);
      } else {
        let id = 0;
        await formdata.save().then(function (contactreturned) {
          id = contactreturned.id;
        });
        this.router.transitionTo('contact.details', id);
      }
    } else {
      console.log(formdata.get('errors'));
    }
  }

  @action
  backtoContact() {
    this.router.transitionTo('contact');
  }

  @action ongenderchange(event) {
    this.model.gender = event.target.value;
    // console.log(event.target.value)
    console.log(this.model.gender);
  }
}
