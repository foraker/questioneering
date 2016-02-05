import DS from 'ember-data';

export default DS.Model.extend({
  site: DS.belongsTo(),
  answers: DS.hasMany(),

  content: DS.attr('string'),
  number: DS.attr(),
  total_questions: DS.attr(),
});
