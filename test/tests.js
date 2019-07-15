import isYes from 'src/is-yes.js';
const test = QUnit.test;

test('checks if even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'yes';
    
    //Act 
    const result = isYes('yes');
    assert.equal(isYes('yes');

    // Call the function you're testing and set the result to a const

    //Assert
    // What should the result be?
    assert.equal(result, true);
});