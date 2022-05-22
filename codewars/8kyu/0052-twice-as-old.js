// https://www.codewars.com/kata/5b853229cfde412a470000d0

// Twice as old

// Description:

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dad, son) {
    if (dad / son === 2) {
        return 0;
    } else if (dad / son < 2) {
        for (i = 0; i <= dad; i++) {
            const dadMinus = dad - i;
            const sonMinus = son - i;
            if (dadMinus / sonMinus === 2) {
                return i;
            }
        }
    } else if (dad / son > 2) {
        for (i = 0; i <= dad; i++) {
            const dadPlus = dad + i;
            const sonPlus = son + i;
            if (dadPlus / sonPlus === 2) {
                return i;
            }
        }
    }
}

// 2022-05-22
