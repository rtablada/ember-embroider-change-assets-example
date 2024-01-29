import { module, test } from 'qunit';
import { setupTest } from 'legacy-app/tests/helpers';

module('Unit | Route | a', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:a');
    assert.ok(route);
  });
});
