import makeNumber from '../src/makeNumber.js';

const test = QUnit.test;

test('returns 0 if guess is correct', function(assert) {
    //Arrange
    const guess = 5;
    const correctNumber = 5;
    // Set up your parameters and expectations
    const expected = 0;
   
    
    //Act 
    const result = makeNumber(guess, correctNumber);

    // Call the function you're testing and set the result to a const
    
    
    //Assert
    // What should the result be?
    assert.equal(expected, result);
});

test('returns -1 if guess is low', function(assert) {
    //Arrange
    const guess = 4;
    const correctNumber = 5;
    // Set up your parameters and expectations
    const expected = -1;
   
    
    //Act 
    const result = makeNumber(guess, correctNumber);

    // Call the function you're testing and set the result to a const
    
    
    //Assert
    // What should the result be?
    assert.equal(expected, result);
});
test('returns 1 if guess is high', function(assert) {
    //Arrange
    const guess = 6;
    const correctNumber = 5;
    // Set up your parameters and expectations
    const expected = 1;
   
    
    //Act 
    const result = makeNumber(guess, correctNumber);

    // Call the function you're testing and set the result to a const
    
    
    //Assert
    // What should the result be?
    assert.equal(expected, result);
});