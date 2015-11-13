import { moduleForModel, test } from 'ember-qunit';

moduleForModel('resolution', 'Unit | Model | resolution', {
  // Specify the other units that are required for this test.
  needs: ['model:answer', 'model:site']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
