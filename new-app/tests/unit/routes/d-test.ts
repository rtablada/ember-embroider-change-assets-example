import { module, test } from 'qunit';
import { setupTest } from 'new-app/tests/helpers';

module('Unit | Route | d', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:d');
    assert.ok(route);
  });
});
