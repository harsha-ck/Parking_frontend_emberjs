import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  role: DS.attr('string', { defaultValue: 'customer' }),
});
