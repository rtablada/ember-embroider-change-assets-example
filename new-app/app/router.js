import EmberRouter from '@ember/routing/router';
import config from 'new-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('c');
  this.route('d');
});
