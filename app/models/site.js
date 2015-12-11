import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  description: DS.attr('string'),
  keywords: DS.attr('string'),
  questions: DS.hasMany(),
  resolutions: DS.hasMany()
});
