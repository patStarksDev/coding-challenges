// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Isograms

// Description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    for (i = 0; i < str.length; i++) {
        for (j = 1; j < str.length; j++) {
            if (
                str.charAt(i).toLowerCase() === str.charAt(i + j).toLowerCase()
            ) {
                return false;
            }
        }
    }
    return true;
}

// 2022-06-10
