//check whether the given number is prime or not;

const num = 7;
let count = 0;
let i = 1;
while(i<num) {
    if (num%i == 0) {
        count += 1
    }
    i++;
}

if (num == 1){
    console.log("number is not prime");
    
}
else if (count>1) {
    console.log("number is not prime");
    
}
else {
    console.log("number is prime");
    
}