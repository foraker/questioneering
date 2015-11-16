import Ember from 'ember';

export default Ember.Service.extend({
  currentSite: Ember.inject.service(),
  question: null,

  getStepAfter(question) {
    this.set('question', question);

    return new Promise(function(resolve, reject) {
      this.get('currentSite').site().then(function (site) {
        site.get('questions').then((questions) => {
          var question = questions.objectAt(questions.indexOf(this.get('question'))+1);

          // TODO: Determine if next step is question or resolution
          resolve(question);
        });
      }.bind(this));
    }.bind(this));
  }
});
