// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

// Round up to the next multiple of 5

// Description:

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// PREP

// parameter: integer; negative, positive, or zero
// return: integer, multiple of 5; negative, positive, or zero
// examples: 3 => 5; 55 => 55; -17 => -15
// psuedocode: given n; while n is not a multiple of 5, add 1 to n; return n

function roundToNext5(n) {
    while (n % 5 !== 0) n++;
    return n;
}

// 2022-07-17
