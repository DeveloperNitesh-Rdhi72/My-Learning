//find all the missing number in the array of natural numbers;

let arr = [1, 2, 3, 4, 5, 8, 9, 11, 13,15,28];
let missingNum = [];
let i = 1;
let p = 0;
while (i < arr[arr.length-1]) {
    if (i == arr[p]) {
        i++;
        p++;
        continue;
    }
    else {
        let j = arr[p];
        while (i < j) {
            missingNum.push(i)
            i++;
        }
    }
    i++;
    p++;
    
}


console.log(...missingNum, " Numbers are mising");
