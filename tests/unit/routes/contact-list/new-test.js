import { module, test } from 'qunit';
import { setupTest } from 'contact-details/tests/helpers';

module('Unit | Route | contact-list/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contact-list/new');
    assert.ok(route);
  });
});
