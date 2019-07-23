import { getThrowFromNumber } from '../src/rps.js';
import { didPlayerWin } from '../src/did-player-win.js';
const test = QUnit.test;

test('returns rock if 0', (assert) => {
    const number = 0;
    const expected = 'rock';
    const result = getThrowFromNumber(number);
    assert.equal(expected, result);
});
test('returns paper if 1', (assert) => {
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
test('returns true if player wins', (assert) => {
    const userChoice = 'rock';
    const computerChoice = 'scissors';
    const expected = true;
    const result = didPlayerWin(userChoice, computerChoice);
    assert.equal(expected, result);
});
test('returns true if player wins', (assert) => {
    const userChoice = 'scissors';
    const computerChoice = 'paper';
    const expected = true;
    const result = didPlayerWin(userChoice, computerChoice);
    assert.equal(expected, result);
});
test('returns true if player wins', (assert) => {
    const userChoice = 'paper';
    const computerChoice = 'rock';
    const expected = true;
    const result = didPlayerWin(userChoice, computerChoice);
    assert.equal(expected, result);
});
test('returns false if player loses', (assert) => {
    const userChoice = 'rock';
    const computerChoice = 'paper';
    const expected = false;
    const result = didPlayerWin(userChoice, computerChoice);
    assert.equal(expected, result);
});
test('returns false if player loses', (assert) => {
    const userChoice = 'scissors';
    const computerChoice = 'rock';
    const expected = false;
    const result = didPlayerWin(userChoice, computerChoice);
    assert.equal(expected, result);
});
test('returns Draw if player = computer', (assert) => {
    const userChoice = 'rock';
    const computerChoice = 'rock';
    const expected = 'draw';
    const result = didPlayerWin(userChoice, computerChoice);
    assert.equal(expected, result);
});