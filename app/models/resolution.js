import DS from 'ember-data';

export default DS.Model.extend({
  context: DS.attr('string'),
  answers: DS.hasMany('answer'),
  site: DS.belongsTo('site')
});
