import { module, test } from 'qunit';

import { setupTest } from 'contact-details/tests/helpers';

module('Unit | Model | gender', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('gender', {});
    assert.ok(model);
  });
});
