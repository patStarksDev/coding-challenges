// https://www.codewars.com/kata/5663f5305102699bad000056

// Maximum Length Difference

// Description:

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// PREP

// parameters - two arrays of strings
// return - integer; maximum difference between lengths of longest and shortest strings in different arrays
// example -
// a1 = ['one', 'two', 'three'], a2 = ['four', 'five', 'six']
// longest string = 'three', shortest string = 'six'
// maximum difference => 5 - 3 = 2
// psuedocode -
// if either array has no elements then return -1
// if given array has two or more elemnets, sort by descending string length
// find difference between longest string in first array and shortest string in second array
// find difference between longest string in second array and shortest string in first array
// return maximum difference

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }
    if (a1.length >= 2) {
        a1 = a1.sort((a, b) => b.length - a.length);
    }
    if (a2.length >= 2) {
        a2 = a2.sort((a, b) => b.length - a.length);
    }
    const diffOne = a1[0].length - a2[a2.length - 1].length;
    const diffTwo = a2[0].length - a1[a1.length - 1].length;
    return diffOne > diffTwo ? diffOne : diffTwo;
}

// 2022-07-24
