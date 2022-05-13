// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Shortest Word

// Description:

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    return s.split(" ").sort((a, b) => {
        return a.length - b.length;
    })[0].length;
}

// 2022-05-12
