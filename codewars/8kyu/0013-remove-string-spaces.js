// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Remove String Spaces

// Description:

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    let newStr = x;
    for (i = 0; i < x.length; i++) {
        newStr = newStr.replace(" ", "");
    }
    return newStr;
}

// 2022-04-13
