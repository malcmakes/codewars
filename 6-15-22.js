// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// assert.strictEqual(getAge("4 years old"), 4);
// assert.strictEqual(getAge("5 years old"), 5);
// assert.strictEqual(getAge("7 years old"), 7);

function getAge(inputString){
    return parseInt(inputString);
    }
   

