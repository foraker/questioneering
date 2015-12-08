import Ember from 'ember';

export default Ember.Route.extend({
  nextStepCalculator: Ember.inject.service(),

  actions: {
    proceed(question) {
      this.get('nextStepCalculator').getStepAfter(question).then(function(nextStep) {
        this.transitionTo(nextStep.name, nextStep.model);
      }.bind(this));
    }
  }
});