import { module, test } from 'qunit';
import { setupTest } from 'contact-details/tests/helpers';

module('Unit | Route | contactDetails', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contact-details');
    assert.ok(route);
  });
});
