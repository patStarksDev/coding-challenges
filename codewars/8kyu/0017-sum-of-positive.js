// https://www.codewars.com/kata/5715eaedb436cf5606000381

// Sum of positive

// Description:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    arr = arr.filter((x) => x > 0);
    let sum = arr.reduce((a, c) => a + c, 0);
    return sum;
}

// 2022-04-17
