//check if given string is palindrom or not;

let str = "madam";
let newstr = '';

for (let i = str.length; i>0; i--) {
    newstr += str[i-1];
}

if (newstr == str) {
    console.log("string is palindrome");
}
else {
    console.log("string is not palindrome");
    
}
