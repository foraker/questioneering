import { moduleForModel, test } from 'ember-qunit';

moduleForModel('site', 'Unit | Model | site', {
  // Specify the other units that are required for this test.
  needs: ['model:question', 'model:resolution']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
