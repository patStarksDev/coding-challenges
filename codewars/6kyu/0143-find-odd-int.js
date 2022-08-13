// https://www.codewars.com/kata/54da5a58ea159efa38000836

// Find the odd int

// Description:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    return arr.find((e) => arr.filter((f) => e === f).length % 2 === 1);
}

// 2022-08-13
