import { module, test } from 'qunit';
import { setupTest } from 'parking/tests/helpers';

module('Unit | Route | user-new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user-new');
    assert.ok(route);
  });
});
