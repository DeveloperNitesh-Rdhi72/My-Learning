//remove duplicates from given array

const arr = [1,2,3,4,4,5,9,9,9,9,9,9];
let newarr = [];

for (a of arr){
    if (!newarr.includes(a)){
        newarr.push(a);
    }
    else {
        continue;
    }
}

console.log(newarr);


//write code for same question but do not create a new arr just change exiting arr i.e remove duplicates form initial arr;