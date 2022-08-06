// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Mumbling

// Description:

// This time no story, no theory. The examples below show you how to write function accum:

// PREP

// parameter:
//  - string; a-z, A-Z
// return:
//  - string; a-z, A-z, and hyphens
// examples:
//  - accum("abcd") => "A-Bb-Ccc-Dddd"
//  - accum("RqaEzty") => "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//  - accum("cwAt") => "C-Ww-Aaa-Tttt"
// psuedocode:
//  - given string, split into array
//  - for each character, return string the includes:
//    - character, uppercase, once
//    - character, lowercase, (index + 1) times
//  - join with hyphen

function accum(s) {
    return s
        .split("")
        .map((e, i) => {
            return e.toUpperCase() + e.toLowerCase().repeat(i);
        })
        .join("-");
}

// 2022-08-06
