import makeNumber from '../src/makeNumber.js';

const test = QUnit.test;

test('returns 0 if guess is correct', function(assert) {
    const guess = 5;
    const correctNumber = 5;
    const expected = 0;
    const result = makeNumber(guess, correctNumber);
    assert.equal(expected, result);
});

test('returns -1 if guess is low', function(assert) {
    const guess = 4;
    const correctNumber = 5;
    const expected = -1;
    const result = makeNumber(guess, correctNumber);
    assert.equal(expected, result);
});
test('returns 1 if guess is high', function(assert) {
    const guess = 6;
    const correctNumber = 5;
    const expected = 1;
    const result = makeNumber(guess, correctNumber);
    assert.equal(expected, result);
});