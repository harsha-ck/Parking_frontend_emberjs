import DS from 'ember-data';

export default DS.Model.extend({

  vtype: DS.attr('integer'),
  status: DS.attr('integer')
});
