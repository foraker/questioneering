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
  },

  winningResolution() {
    var uniqueResolutions = this.get('resolutions').uniq();
    var maxResolution = {
      resolution: null,
      count: 0
    };

    for (let resolution of uniqueResolutions) {
      var resolutionCount = this.count(resolution);

      if (resolutionCount > maxResolution.count) {
        maxResolution.resolution = resolution;
        maxResolution.count = resolutionCount;
      }
    }

    return maxResolution.resolution;
  }
});
