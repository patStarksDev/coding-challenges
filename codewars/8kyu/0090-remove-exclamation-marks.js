// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Remove exclamation marks

// Description:

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s
        .split("")
        .filter((e) => e != "!")
        .join("");
}

// 2022-06-29
