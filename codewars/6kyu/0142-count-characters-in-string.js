// https://www.codewars.com/kata/52efefcbcdf57161d4000091

// Count characters in your string

// Description:

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// PREP

// parameter:
//  - string; empty or with characters
// return:
//  - object; empty, or with key-value pairs enumerating characters of given string
// example:
//  - count() => {}
//  - count('apple') => {'a': 1, 'p': 2, 'l': 1, 'e': 1}
// psuedocode:
//  - create empty object
//  - for each character in string
//      - if (charcter matches object key), then (increment key-value)
//      - else (character does not match any object key), then (create key-value, set to 1)
//  - return object

function count(string) {
    let obj = {};
    for (i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (obj[`${char}`]) {
            obj[`${char}`]++;
        } else {
            obj[`${char}`] = 1;
        }
    }
    return obj;
}

// 2022-08-12
