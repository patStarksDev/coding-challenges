// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// A Needle in the Haystack

// Description:

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack) {
    // find needle
    if (haystack.find(element => element === "needle")) {
        // find needle index
        const needleIndex = haystack.findIndex(element => element === "needle")
        // return
        return `found the needle at position ${needleIndex}`
    }
}
  
// 2022-04-05