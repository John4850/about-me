import makeNumber from '../src/makeNumber.js';
const test = QUnit.test;

test('returns 0 if guess is correct', function(assert) {
    //Arrange
    const guess = 5;

    // Set up your parameters and expectations
    const correctNumber = 5;
    const expected = 0;
   
    
    //Act 
    const result = makeNumber(guess, correctNumber);

    // Call the function you're testing and set the result to a const
    
    
    //Assert
    // What should the result be?
    assert.equal(result, expected);

});