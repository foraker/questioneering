import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  site() {
    return this.get('store').findRecord('site', ENV.APP.SITE_ID);
  }
});
