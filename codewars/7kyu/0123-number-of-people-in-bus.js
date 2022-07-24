// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// Number of People in the Bus

// Description:

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// PREP

// parameter - array of integer pairs (arrays of two in length); integers >= 0
// return - number; final sum/difference of integer pairs; integer >= 0
// examples - [[10,0],[3,5],[5,8]] => 5; [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] => 17
// psuedocode - sum=0; loop through given array; for each element in array, add integer at index 0, subtract integer at index 1; return sum

const number = function (busStops) {
    let riders = 0;
    for (i = 0; i < busStops.length; i++) {
        riders += busStops[i][0];
        riders -= busStops[i][1];
    }
    return riders;
};

// 2022-07-23
