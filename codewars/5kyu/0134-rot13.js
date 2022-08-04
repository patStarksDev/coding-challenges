// https://www.codewars.com/kata/530e15517bc88ac656000716

// Rot13

// Description:

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// PREP

// parameter:
//  - string; letters, numerals, symbols
// return:
//  - string; letters encoded, numerals and symbols unchanged
// examples:
//  - rot13('test') => 'grfg'
//  - rot13('TeSt') => 'GrFg'
// psuedocode:
//  - make array of alphabet
//  - make function to change letter
//    - find position of letter in array
//    - add 13 to position
//      - if (sum > 25), then (-= 26)
//    - return letter of position (sum)
//  - iterate string
//    - for each chracter
//      - if (not alphabet), then (return unchanged)
//      - if (alphabet)
//        - if (uppercase), then (add13), return (uppercase13)
//        - else (lowercase), (add13), return (lowercase13)
//  - return ciphered string

function rot13(message) {
    // make array of alphabet
    let abc = "abcdefghijklmnopqrstuvwxyz";
    abc = abc.split("");
    // make function to change letter
    function cipher(char) {
        let posX = abc.indexOf(char) + 13;
        if (posX > 25) {
            posX -= 26;
        }
        return abc[posX];
    }
    // iterate string
    return message
        .split("")
        .map((e) => {
            if (!abc.includes(e.toLowerCase())) {
                return e;
            } else if (e === e.toUpperCase()) {
                return cipher(e.toLowerCase()).toUpperCase();
            } else {
                return cipher(e);
            }
        })
        .join("");
}

// 2022-08-03
