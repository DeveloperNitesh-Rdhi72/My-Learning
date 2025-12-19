//counts the occurace of each number in the given array;

let arr = [1,1,2,3,4,4,4,4,4,5,5,6,6,6,7,8,9,9,0,0,1,2,3,4,6,5,7,8];
let carr = [];
let countarr = []
for (a of arr) {
    let count = 0;
    for (b of arr) {
        if (a == b) {
            count += 1;
        }   
    }
    if (!carr.includes(a)) {
        carr.push(a)
        countarr.push(count);
    }
}

for (let i = 0; i<carr.length; i++) {
    console.log(carr[i],countarr[i]);    
}


