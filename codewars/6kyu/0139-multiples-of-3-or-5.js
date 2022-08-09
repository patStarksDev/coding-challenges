// https://www.codewars.com/kata/514b92a657cdc65150000006

// Multiples of 3 or 5

// Description:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// PREP

// parameter:
//  - number; integer; if <0, return 0
// return:
//  - number; sum of multiples
// example:
//  - 10 => 26 (3 + 5 + 6)
// psuedocode:
//  - create sum variable
//  - loop through integers less than given number
//  - add multiples of 3 or 5 to sum
//  - return sum

function solution(number) {
    let sum = 0;
    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// 2022-08-09
