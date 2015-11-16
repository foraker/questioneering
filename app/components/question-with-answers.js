import Ember from 'ember';

export default Ember.Component.extend({
  resolutionCounter: Ember.inject.service(),

  actions: {
    recordResolution(resolution) {
      this.get('resolutionCounter').record(resolution);
      this.sendAction('onRecordResolution', this.get('question'));
    }
  }
});
