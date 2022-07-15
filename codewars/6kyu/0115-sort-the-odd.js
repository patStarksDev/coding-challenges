// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Sort the odd

// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// PREP

// parameter: array of numbers; always numbers, no empty arrays; negative integers !
// return: sorted array; original, not new array
// examples: [1,2,3,4,5,6] => [1,2,3,4,5,6]; [6,5,4,3,2,1] => [6,1,4,3,2,5]; [2,7,5,0,3] => [2,3,5,0,7]
// pseudocode: given array, replace odds with sorted odds.

// to replace odds with sorted odds, create array of sorted odds.
// to create array of sorted odds, use filter(), remainder operator, sort(), and store in constant.
// to replace odds, iterate over original array with map().
// use conditional and remainder operator to check if odd.
// if odd, shift() from sorted array.

// added Math.abs() to check for negative odd integers

function sortArray(array) {
    const sortedOdds = array
        .filter((e) => Math.abs(e % 2) === 1)
        .sort((a, b) => a - b);
    return array.map((e) => (Math.abs(e % 2) === 1 ? sortedOdds.shift() : e));
}

// 2022-07-15
