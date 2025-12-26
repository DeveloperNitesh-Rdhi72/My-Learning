//finds the longest word in a give string;

let str = "I love javascript programming";
let arr = str.split(" ");
let longestWord = arr[0]
for (a of arr) {
    if (a.length > longestWord.length) {
        longestWord = a
    }
}
console.log(longestWord);
