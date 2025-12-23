//count a perticular word in a given string;

let str = "I love JS and I love coding love"
let array = str.split(" ");
function countword(arr, word) {
    let count = 0;
    for (a of arr) {
        if (a == word) {
            count += 1;
        }
    }
    console.log(count);
    
}

countword(array, "love")