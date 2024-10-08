//Function Declaration
let name = '';
greetMessage("Raja")
function greetMessage(name) {//name is  called as argument
    console.log(`${name} Welcome from Geeks for Geeks`);
}
//Function call
greetMessage("Aneesh");//parameter
greetMessage("Gagan");
greetMessage("Raj");
function sum(min,max){
    let sum1 = 0;
    for (let index = min; index < max; index++){
        sum1 += (index);
    }
    return sum1;
}
console.log(sum(1,10));
//Annanymous Function
//Function with No Name
let Annanymousfunction = function(){
    console.log("Hi Hello");
}
Annanymousfunction();//Calling Function
console.log(typeof Annanymousfunction);
//Note after defining the function in the lines after definition only Annnanymous functions can be called
//Named Function 

let Annanymousfunction1 = function Messages(){
    console.log("Hi Hello");
    console.log(typeof Messages);
}
Annanymousfunction1();
//in Named Function We only acess the Function with the Assigned Variable name not with the function as its local to that function
//Function with Return Types
function summing(x,y){
    return x + y;
}
let values = summing(12,34);
console.log(values);
//Arrow Functions
const calculate = (x,y) => {
    return x+y;
}
console.log(calculate(12,45));
const calx = (x,y) => x+y;
console.log(calx(12,45));
//eg 3
const calc = (x,y) => {
    if (x > y){
        return x +y;
    }
    else{
        return x-y;
    }
}
console.log(calx(0,10));
//Eg-4
const Sums = (x,y) => x>y? x +y : x -y;
console.log(Sums(23,3));
//Arraow Function reduces the number of lines by providing us an option for writing return type and by replacing function keyword with =>
const Exercise = (x,y) => {
    let total = 0;
    for(let i = x; i <= y; i++){
        total += i;
    }
    return total;
}
console.log(Exercise(1,20));