import { module, test } from 'qunit';
import { setupTest } from 'parking/tests/helpers';

module('Unit | Route | reservation', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:reservation');
    assert.ok(route);
  });
});
