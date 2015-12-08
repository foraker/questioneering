import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'button',
  attributeBindings: ['href'],
  href: '#',

  click: function(e) {
    e.preventDefault();

    this.answer.get('resolution').then((resolution) => {
      this.get('onClick')(resolution);
    });
  }
});
