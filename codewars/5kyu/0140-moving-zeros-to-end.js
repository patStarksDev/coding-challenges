// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Moving Zeros To The End

// Description:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    const noZeros = arr.filter((e) => e !== 0);
    const allZeros = arr.filter((e) => e === 0);
    return [noZeros, allZeros].flat();
}

// 2022-08-10
