// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Abbreviate a Two Word Name

// Description:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    return (
        name.slice(0, 1) +
        "." +
        name.slice(name.indexOf(" ") + 1, name.indexOf(" ") + 2)
    ).toUpperCase();
}

// 2022-06-19
