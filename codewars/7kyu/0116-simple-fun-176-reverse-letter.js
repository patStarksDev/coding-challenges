// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// Simple Fun #176: Reverse Letter

// Description:

// Task

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

// PREP

// parameters: string; characters are alphabetic, digits, and symbols
// return: string; reversed, filtered for alphabetic characters
// examples: 'a1b2c3code' => 'edoccba'; 'band!to123' => 'otdnab'
// psuedocode: given string, replace non-alphabetic characters with regex, split to array, reverse array, join to string, return string

function reverseLetter(str) {
    return str
        .replace(/[^a-z]/gi, "")
        .split("")
        .reverse()
        .join("");
}

// 2022-07-16
