// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Fake Binary

// Description:

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    return x
        .split("")
        .map((n) => (n < 5 ? 0 : 1))
        .join("");
}

// 2022-04-19
