// https://www.codewars.com/kata/54dc6f5a224c26032800005c

// Help the bookseller !

// Description:

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...

// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).
// Note:

// In the result codes and their values are in the same order as in M.

// PREP

// parameters (2)
// 1) array of strings; strings are characters, followed by a space, followed by integer >=0
// 2) array of strings; strings are one a single character
// return - string
// format: "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// where the first character inside each data pair is from the second parameter
// where the integer inside the data pair is the sum of integers from the above category
// example - ["AAPL 160", "BRK 6", "BEZ 99", "CAD 4"], ["B", "D"] => "(B : 105) - (D : 0)"
// psuedocode -
// create empty string
// iterate second parameter
// create sum
// iterate first parameter
// if first and second parameters match
// add integer to sum for that character
// extract integer from matched string
// split at space, select second index, wrap with Number()
// insert character and sum in template literal
// concatenate to string
// return string

function stockList(listOfArt, listOfCat) {
    let str = ``;
    // edge case - if either array is empty, return empty string
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return str;
    }
    // iterate "key" array
    for (i = 0; i < listOfCat.length; i++) {
        let catChar = listOfCat[i];
        let sum = 0;
        // iterate "stock" array
        for (j = 0; j < listOfArt.length; j++) {
            let artChar = listOfArt[j].charAt(0);
            // if "stock" matches "key"
            if (catChar === artChar) {
                // add integer from "stock" to sum
                sum += Number(listOfArt[j].split(" ")[1]);
            }
        }
        // data standardization
        const temp = `(${catChar} : ${sum}) - `;
        // concat
        str += temp;
    }
    // remove tail
    return str.slice(0, -3);
}

// 2022-07-28
