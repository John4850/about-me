import isYes from '../src/is-yes.js';
const test = QUnit.test;

test('checks if true', function(assert) {
    const text = 'yes';
    const result = isYes(text);
    assert.equal(true, result);
});
test('checks if false', function(assert) {
    const text = 'no';
    const result = isYes(text);
    assert.equal(false, result);
});