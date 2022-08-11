// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Simple Pig Latin

// Description:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// PREP

// parameter:
//  - string; words and puncuation
// return:
//  - string; words translated to pig latin
// example:
//  - pigIt('Pig latin is cool') => 'igPay atinlay siay oolcay'
//  - pigIt('Hello world !') => 'elloHay orldway !'
// psuedocode:
//  - split string into array
//  - iterate array, for each element:
//    - if (a-z), then
//      - split at first letter into two elements
//      - concatenate second element, first element, and 'ay'
//      - join and return element
//  - join array and return translated string

function pigIt(str) {
    return str
        .split(" ")
        .map((e) =>
            e.search(/[a-z]/i) >= 0 ? e.slice(1) + e.slice(0, 1) + "ay" : e
        )
        .join(" ");
}

// 2022-08-11
