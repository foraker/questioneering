import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  site: DS.belongsTo('site'),
  answers: DS.hasMany('answer')
});
