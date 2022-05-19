// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Sum Mixed Array

// Description:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
    return x.reduce((a, c) => a + +c, 0);
}

// 2022-05-19
