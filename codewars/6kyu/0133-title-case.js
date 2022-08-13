// https://www.codewars.com/kata/5202ef17a402dd033c000009

// Title Case

// Description:

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

//     First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
//     Second argument: the original string to be converted.

// ###Arguments (Other languages)

//     First argument (required): the original string to be converted.
//     Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

// PREP

// parameters -
// 1) string; title to modify and return
// 2) string; minor words to check against title
// return -
// string; title that has been capitalized sans minor words
// examples -
// titleCase('a clash of KINGS', 'a an the of') => 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') => 'The Wind in the Willows'
// titleCase('the quick brown fox') => 'The Quick Brown Fox'
// psuedocode -
// if (there are minor words)
// title to lowercase, to array
// iterate over title
// if (first word in title)
// or (word in title does not match minor word)
// return capitalized word
// else
// return word as is
// title to string and return
// else (there are no minor words)
// title to lowercase, to array
// iterate over title
// return capitalized words
// title to string and return

function titleCase(title, minorWords) {
    return !!minorWords
        ? title
              .toLowerCase()
              .split(" ")
              .map((e, i) => {
                  if (
                      i === 0 ||
                      !minorWords.toLowerCase().split(" ").includes(e)
                  ) {
                      return e.slice(0, 1).toUpperCase() + e.slice(1, e.length);
                  } else {
                      return e;
                  }
              })
              .join(" ")
        : title
              .toLowerCase()
              .split(" ")
              .map((e) => {
                  return e.slice(0, 1).toUpperCase() + e.slice(1, e.length);
              })
              .join(" ");
}

// 2022-08-02
