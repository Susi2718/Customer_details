import { module, test } from 'qunit';
import { setupTest } from 'contact-details/tests/helpers';

module('Unit | Service | drop_down', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:drop-down');
    assert.ok(service);
  });
});
