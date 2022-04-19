// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Fake Binary

// Description:

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    let arr = x.split("");
    let ans = [];
    arr.forEach((n) => (n < 5 ? ans.push("0") : ans.push("1")));
    return ans.join("");
}

// 2022-04-18
