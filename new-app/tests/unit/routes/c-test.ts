import { module, test } from 'qunit';
import { setupTest } from 'new-app/tests/helpers';

module('Unit | Route | c', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:c');
    assert.ok(route);
  });
});
