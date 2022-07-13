// 7-13-22
// 6 kyu
// Count characters in your string

// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    let count = {}

    string.split('').map(function (character){
        count[character] ? count[character]++ : count [character] = 1 
    })

    return count
  }
