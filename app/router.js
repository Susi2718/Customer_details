import EmberRouter from '@ember/routing/router';
import config from 'contact-details/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('about');
  this.route('contact', function () {
    this.route('details',{ path: 'details/:id' });
  });
  this.route('contact.new', { path: 'contact/new' });
  this.route('contact.edit', { path: 'contact/edit/:id' });
//  this.route('contact.details', { path: 'contact/details/:id' });
});
