import isYes from '../src/is-yes.js';
const test = QUnit.test;

test('checks if true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'yes';
    
    //Act 
    const result = isYes(text);

    // Call the function you're testing and set the result to a const

    //Assert
    // What should the result be?
    assert.equal(true, result);
});
test('checks if false', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'no';
    
    //Act 
    const result = isYes(text);

    // Call the function you're testing and set the result to a const

    //Assert
    // What should the result be?
    assert.equal(false, result);
});