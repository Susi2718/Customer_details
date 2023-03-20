import { module, test } from 'qunit';

import { setupTest } from 'contact-details/tests/helpers';

module('Unit | Serializer | gender', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('gender');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('gender', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
