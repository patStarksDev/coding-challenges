// https://www.codewars.com/kata/5208f99aee097e6552000148

// Break camelCase

// Description:

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
    return str
        .split("")
        .map((e, i) => (e === e.toUpperCase() ? " " + e : e))
        .join("");
}

// 2022-06-17
