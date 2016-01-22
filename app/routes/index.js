import Ember from 'ember';

export default Ember.Route.extend({
  currentSite: Ember.inject.service(),

  afterModel: function(site) {
    document.title = site.get('title');
    $("meta[name=description]").attr('content', site.get('description'));
    $("meta[name=keywords]").attr('content', site.get('keywords'));
  },

  model() {
    return this.get('currentSite').site();
  }
});
