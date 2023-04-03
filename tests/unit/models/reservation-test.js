import { module, test } from 'qunit';

import { setupTest } from 'park/tests/helpers';

module('Unit | Model | reservation', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('reservation', {});
    assert.ok(model);
  });
});
