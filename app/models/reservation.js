import DS from 'ember-data';

export default DS.Model.extend({
  vnum: DS.attr(),
  vtype: DS.attr(),
  status: DS.attr(),
  r_time: DS.attr(),
  user_id: DS.attr(),
});
