import Ember from 'ember';

export default Ember.Service.extend({
  resolutions: null,

  init() {
    this._super(...arguments);
    this.set('resolutions', []);
  },

  record(resolution) {
    this.get('resolutions').pushObject(resolution);
  },

  count(resolution) {
    return this.get('resolutions').filter((recordedResolution) => {
      return resolution === recordedResolution;
    }).length;
  }
});
