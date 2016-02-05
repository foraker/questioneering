import DS from 'ember-data';

export default DS.Model.extend({
  answers: DS.hasMany(),
  site: DS.belongsTo(),

  title: DS.attr('string'),
  content: DS.attr('string'),
});
