// https://www.codewars.com/kata/56dec885c54a926dcd001095

// Opposite number

// Description:

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


function opposite(number) {
    return number > 0 ? -Math.abs(number) : Math.abs(number)
}
  
// 2022-04-06