// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

// Tortoise racing

// Description:

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// PREP

// parameters -
// 1) integer; > 0, speed (ft/hr)
// 2) integer; > 0, speed (ft/hr)
// 3) integer; > 0, lead (ft)
// return -
// array of three integers; time to catch up [hr, min, sec]
// example -
// (3, 4, 5) => [5, 0, 0]
// psuedocode -
// convert to seconds, solve for x
// g = (v2 - v1) * x
// convert and format to [hrs, mins, secs]

function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let hrs = 0;
    let mins = 0;
    let secs = Math.floor((g / (v2 - v1)) * 3600);
    while (secs >= 3600) {
        hrs++;
        secs -= 3600;
    }
    while (secs >= 60) {
        mins++;
        secs -= 60;
    }
    return [hrs, mins, secs];
}

// 2022-07-30
