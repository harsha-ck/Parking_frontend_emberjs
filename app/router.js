import EmberRouter from '@ember/routing/router';
import config from 'park/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('spot');
  this.route('reservation');
});
