// https://www.codewars.com/kata/515e271a311df0350d00000f

// Square(n) Sum

// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    return numbers.reduce((a, c) => a + c * c, 0);
}

// 2022-04-21
