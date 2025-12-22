//reverse each word in the give string;

let str = "hello world javascript";
let arr = str.split(" ");
for (let j = 0; j<arr.length; j++) {
    let na = '';
    for (let i = arr[j].length; i>0; i--) {
        na += arr[j][i-1];
    }
    arr[j] = na;
}
let str1 = arr.join(" ")
console.log(str1);
