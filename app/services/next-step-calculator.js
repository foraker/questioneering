import Ember from 'ember';

export default Ember.Service.extend({
  currentSite: Ember.inject.service(),
  resolutionCounter: Ember.inject.service(),
  question: null,

  getStepAfter(question) {
    this.set('question', question);

    return new Promise(function(resolve, reject) {
      this.get('currentSite').site().then(function (site) {
        site.get('questions').then((questions) => {
          var question = questions.objectAt(questions.indexOf(this.get('question'))+1);

          if (question) {
            resolve({
              name: 'question',
              model: question
            });
          } else {
            resolve({
              name: 'resolution',
              model: this.get('resolutionCounter').winningResolution()
            })
          }
        });
      }.bind(this));
    }.bind(this));
  }
});
