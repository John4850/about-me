import makeNumber from '../src/makeNumber.js';
import './app-test.js/index.js';

const test = QUnit.test;

test('returns 0 if guess is correct', function(assert) {
    //Arrange
    const guess = 5;
    const correctNumber = 5;

    // Set up your parameters and expectations
   
    
    //Act 
    const result = makeNumber(guess, correctNumber);

    // Call the function you're testing and set the result to a const
    
    
    //Assert
    // What should the result be?
    assert.equal(guess, correctNumber);
    assert.equal(result === 0);
});