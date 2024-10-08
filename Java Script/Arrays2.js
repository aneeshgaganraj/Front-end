const fruits = ["apple","cherry","orange","banana"];
fruits.sort();
console.log(fruits);
//Sorting NUmbers note sort() is only used to sort the Strings
const number =[1,4,2,6,7,5,8,9,99,34,23];
function sortinorder ( a, b){
    return a - b;
}
number.sort(sortinorder);
console.log(number);
//Sort in descending order
const numbe1r =[1,4,2,6,7,5,8,9,99,34,23];

function sortinrevese (a,b){
    return b - a;
}
numbe1r.sort(sortinrevese);
console.log(numbe1r);
//Split and join
//reverse of arrays
const inputstr = "madam may i come in";
const arr = [1,2,3,4,5];
console.log(arr.reverse());
//spliting
const arrofchar = inputstr.split();
console.log(arrofchar);
//spliting on char
const arrofchar1 = inputstr.split("");
console.log(arrofchar1);
//spliting with space conver array of characters into string
const arr23 = inputstr.split(" ");
console.log(arr23)
//join to get array of char back to string
const valuesss = "prakash";
const splitting = valuesss.split("");
console.log(splitting)
splitting.reverse();
console.log(splitting.join(""))
//Spread function array
const arr11 = [1,2,3,4,5]
console.log(...arr11);
console.log("Array - ", arr11)
const arrays1 = [1,2,3,4,5];
const arrays2 = [8,9];
const arrays3 = [...arrays1,...arrays2,10,23,45];
console.log(arrays3)
//Destructuring Arrays
const [a,b,c,courses ] = [1,2,3, ["Html","CSS","Bootsrap","JavaScript"]];
console.log(a);
console.log(b);
console.log(c);
const [ , , , course] = [1,2,3, ["Html","CSS","Bootsrap","JavaScript"]];
console.log([ , , , course] )
const vals = [1,2,3, ["Html","CSS","Bootsrap","JavaScript"]];
const [aaaa,ccc] = vals;
console.log(ccc)
console.log(aaaa)
//Reference
let arr1 = [1,2,3,45]
let arr2 = arr1;
console.log("Array-",arr1)
console.log("Array2 - ", arr2)
arr2.push(4);
console.log("Array-",arr1)
console.log("Array2 - ", arr2)