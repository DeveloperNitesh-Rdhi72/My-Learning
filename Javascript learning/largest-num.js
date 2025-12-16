let arr = [1,2,900,8543,9,8,9,71];

let gnum = 0;
for (a of arr) {
    for (b of arr){
        while (a>b && a>gnum){
            gnum = a
        }
    }
}
console.log(gnum);

//------------------------------------------easy method---------------------------------------

let arr1 = [10, 45, 2, 98, 64, 3];

let largest = arr1[0];  // assume first element is largest

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i];
    }
}

console.log("Largest number is:", largest);
