// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Highest Scoring Word

// Description:

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// PREP

// parameter:
//  - string; of words
// return:
//  - string; of word with highest score
// example:
//  - 'the quick brown fox' => 'brown'
// psuedocode:
//  - create string variable containing alphabet
//  - create function that returns score of given letter
//  - create function that returns score of given word
//  - split given string of words, sort by word score, return first word in resulting array

function high(x) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const digitScore = (d) => abc.indexOf(d) + 1;
    const wordScore = (w) =>
        w
            .split("")
            .map((e) => digitScore(e))
            .reduce((a, c) => a + c, 0);
    return x.split(" ").sort((a, b) => wordScore(b) - wordScore(a))[0];
}

// 2022-08-07
