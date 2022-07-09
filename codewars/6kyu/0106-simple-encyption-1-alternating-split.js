// https://www.codewars.com/kata/57814d79a56c88e3e0000786

// Simple Encryption #1 - Alternating Split

// Description:

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if (n < 1 || !text) {
        return text;
    } else {
        for (i = 0; i < n; i++) {
            let odd = text
                .split("")
                .filter((e, i) => i % 2 === 1)
                .join("");
            let even = text
                .split("")
                .filter((e, i) => i % 2 === 0)
                .join("");
            text = odd + even;
        }
        return text;
    }
}

function decrypt(encryptedText, n) {
    if (n < 1 || !encryptedText) {
        return encryptedText;
    } else {
        let decryptedText = encryptedText;
        for (i = 0; i < n; i++) {
            let evens = decryptedText
                .split("")
                .filter((e, i) => i >= Math.floor(decryptedText.length / 2));
            let odds = decryptedText
                .split("")
                .filter((e, i) => i <= decryptedText.length / 2 - 1);
            decryptedText = [];
            for (j = 0; j < encryptedText.length / 2; j++) {
                decryptedText.push(evens[j]);
                decryptedText.push(odds[j]);
            }
            decryptedText = decryptedText.join("");
        }
        return decryptedText;
    }
}

// 2022-07-09
