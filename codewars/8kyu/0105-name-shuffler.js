// https://www.codewars.com/kata/559ac78160f0be07c200005a

// Name Shuffler

// Description:

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
    return str
        .split(" ")
        .sort((a, b) => 1)
        .join(" ");
}

// 2022-06-17
