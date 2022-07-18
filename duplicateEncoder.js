// 7/18/22
// 6 kyu
// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){

    const input = word.toLowerCase();
    let result = '';

    for (let i = 0; i < input.length; i++){
        let count = 0;

        for(let j = 0; j < input.length; j++){
            if(input[i] === input[j]){
                count++;
            }
        }
        if (count > 1){
            result += ')';
        } else {
            result += '(';
        }
    }
    return result;
}