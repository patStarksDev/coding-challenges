// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build Tower

// Description:

// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// PREP

// parameter: number; always positive integer
// return: array; elements are strings
// examples: 2, [' * ', '***']; 5, ['    *    ', '   ***   ', '  *****  ', ' ******* ', '*********']
// pseudocode:

// create empty array; store in constant
// for n length, push strings to array
// build each string by adding spaces, then asterisks, then spaces
// return array

function towerBuilder(n) {
    let towerArr = [];
    for (i = 0; i < n; i++) {
        towerArr.push(
            " ".repeat(n - i - 1) +
                "*".repeat(i * 2 + 1) +
                " ".repeat(n - i - 1)
        );
    }
    return towerArr;
}

// 2022-07-22
