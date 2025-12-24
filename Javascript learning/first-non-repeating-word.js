//find the first none repeating letter in a given string;

let str = "aabbccdeeff";

for (let i = 1; i<=str.length; i++) {
    let count = 0;
   if (str[i] != str[i-1] && str[i] != str[i+1]) {
    console.log(str[i]);
    break;
   }
}