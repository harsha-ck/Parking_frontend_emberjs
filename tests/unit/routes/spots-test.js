import { module, test } from 'qunit';
import { setupTest } from 'park/tests/helpers';

module('Unit | Route | spots', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:spots');
    assert.ok(route);
  });
});
