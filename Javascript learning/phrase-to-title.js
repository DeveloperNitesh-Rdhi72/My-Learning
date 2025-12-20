//capitalize each letter of every word in a given string;

let str = "hello world program";

let arr = str.split(" ");
for (let j = 0; j<arr.length; j++) {
    let na = '';
    for (let i = 0; i<arr[j].length; i++){
        if (i == 0) {
            na += arr[j][0].toUpperCase();
        }
        else {
            na += arr[j][i].toLowerCase();
        }
    }
    arr[j] = na;
    
}

let str1 = arr.join(" ")
console.log(str1);









