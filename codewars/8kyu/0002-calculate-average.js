// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Calculate average

// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = 0
    if (array.length > 0) {
        for (i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return(sum = sum / array.length)
    } else return 0;
}

// 2022-04-02