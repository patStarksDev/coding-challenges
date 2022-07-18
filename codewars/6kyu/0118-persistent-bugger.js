// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Persistent Bugger.

// Description:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// PREP

// parameters - number; always positive, non-zero
// return - number; always equal to or greater than zero
// examples - 69 => 6*9=54, 5*4=20, 2*0=0 => 3; 11 => 1*1=1 => 1; 4 => 1
// psuedocode - given number, check if number is one digit in length; if so, return zero; else, isolate each digit of that number, multiply each digit together, return sum; check if sum is one digit in length; if so, return number of times multiplication of digits happened; else, repeat from beginning

function persistence(num) {
    i = 0;
    while (num.toString().length !== 1) {
        num = num
            .toString()
            .split("")
            .reduce((a, c) => a * c, 1);
        i++;
    }
    return i;
}

// 2022-07-18
