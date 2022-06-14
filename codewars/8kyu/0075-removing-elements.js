// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Removing Elements

// Description:

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
    return arr.filter((e, i) => i % 2 === 0);
}

// 2022-06-14
