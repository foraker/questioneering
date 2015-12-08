import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  site() {
    return this.get('store').findRecord('site', 1);
  }
});
