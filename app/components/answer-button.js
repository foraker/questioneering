import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click: function() {
    this.answer.get('resolution').then((resolution) => {
      this.get('onClick')(resolution);
    });
  }
});
