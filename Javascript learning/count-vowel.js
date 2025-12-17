//counts the number of vowel in the given string;

const str = "javascript is a programing language which is case sensitive language";
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let vowelCount = 0;
for (s of str) {
    if (vowel.includes(s)){
        vowelCount += 1;
    }
}
console.log(vowelCount);
