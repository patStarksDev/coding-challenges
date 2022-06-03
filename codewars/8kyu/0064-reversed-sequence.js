// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// Reversed sequence

// Description:

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
    let arr = [];
    for (i = 0; i < n; i++) {
        arr.push(n - i);
    }
    return arr;
};

// 2022-06-03
