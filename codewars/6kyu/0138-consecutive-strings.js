// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// Consecutive strings

// Description:

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return ""

// PREP

// parameters
//  - array; of strings
//  - number; integer (>0 ??)
// return
//  - string; of longest concatenation
// examples
//  - (["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) => "abigailtheta"
//  - ([], 3) => ""
// psuedocode
//  - iterate through given array
//  - concatenate n elements
//  - sort by length
//  - return longest concatenation

function longestConsec(strarr, k) {
    if (strarr.length <= 0 || strarr.length < k) {
        return "";
    }

    let arr = [];
    for (i = 0; i <= strarr.length - k; i++) {
        let str = "";
        for (j = 0; j < k; j++) {
            str += strarr[i + j];
        }
        arr.push(str);
    }

    const longest = Math.max(...arr.map((e) => e.length));
    return arr.find((e) => e.length === longest);
}

// 2022-08-08
