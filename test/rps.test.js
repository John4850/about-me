import { getThrowFromNumber } from '../src/rps.js';
const test = QUnit.test;

test('returns rock if 0', (assert) => {
    const number = 0;
    const expected = 'rock';
    const result = getThrowFromNumber(number);
    assert.equal(expected, result);
});
test('returns paper is 1', (assert) => {
    const number = 1;
    const expected = 'paper';
    const result = getThrowFromNumber(number);
    assert.equal(expected, result);
});

test('returns scissors if 2', (assert) => {
    const number = 2;
    const expected = 'scissors';
    const result = getThrowFromNumber(number);
    assert.equal(expected, result);
});