import { module, test } from 'qunit';
import { setupTest } from 'contact-details/tests/helpers';

module('Unit | Service | contact-list', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:contact-list');
    assert.ok(service);
  });
});
