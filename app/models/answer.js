import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  question: DS.belongsTo(),
  resolution: DS.belongsTo()
});
