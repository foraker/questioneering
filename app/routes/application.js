import Ember from 'ember';

export default Ember.Route.extend({
  nextStepCalculator: Ember.inject.service(),

  afterModel: function() {
    if (this.get('store').peekAll('site').get('length') == 0) {
      return this.transitionTo('index');
    }
  },

  actions: {
    proceed(question) {
      this.get('nextStepCalculator').getStepAfter(question).then(function(nextStep) {
        this.transitionTo(nextStep.name, nextStep.model);
      }.bind(this));
    }
  }
});
