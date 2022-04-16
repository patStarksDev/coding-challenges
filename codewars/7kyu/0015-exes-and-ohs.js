// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Exes and Ohs

// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let numX = 0;
    let numO = 0;
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            numX += 1;
        }
        if (str[i] === "o") {
            numO += 1;
        }
    }
    return numX === numO;
}

// 2022-04-15
