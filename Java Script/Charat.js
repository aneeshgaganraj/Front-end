
const value = "geeks";
console.log(value.charCodeAt(2));
let interpretedStr = '';
for(let i =0 ; i < value.length;i++){
    let charCode = value.charCodeAt(i);
    let newcode = charCode + 2;
    let newvalue = String.fromCharCode(newcode);
    interpretedStr += newvalue;
}
console.log(interpretedStr);
const name1 = "gangambika";
console.log(name1.charAt(2));
console.log(name1.charCodeAt(4));
//indexof used check wheher the given string is present or not from start index 
const display1 = "Iam a Mentor at Geeks for Geeks";
console.log(display1.indexOf("a",2));
console.log(display1.indexOf("b"));
const findchar = (text,char) => text.indexOf(char) === -1 ? "char not found" :  "char found";
const result = findchar("Aneesh","r");
console.log(result);