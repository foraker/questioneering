import Ember from 'ember';

export default Ember.Route.extend({
  currentSite: Ember.inject.service(),

  afterModel: function(site) {
    document.title = site.get('title')
  },

  model() {
    return this.get('currentSite').site();
  }
});
