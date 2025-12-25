//counts the number of time a letter present in a given word;

let str = "javascript";
let char = [];
let charcount = [];
for (s of str) {
    let count = 0;
    for (p of str){
        if (s == p){
            count += 1;
        }
    }
    if (!char.includes(s)) {
        char.push(s);
        charcount.push(count)
    }
    
    
}

for (let i = 0; i<char.length; i++) {
    console.log(char[i],charcount[i]);
    
}