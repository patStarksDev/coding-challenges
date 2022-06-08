// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// I love you, a little , a lot, passionately ... not at all

// Description:

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(n) {
    while (n > 6) {
        n = n - 6;
    }
    return n === 1
        ? "I love you"
        : n === 2
        ? "a little"
        : n === 3
        ? "a lot"
        : n === 4
        ? "passionately"
        : n === 5
        ? "madly"
        : n === 6
        ? "not at all"
        : [];
}

// 2022-06-08
