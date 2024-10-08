//Pure Functions
function getDouble(number){
    return number**2;
}
console.log(getDouble(9));
//map
const arr = [1,2,3,4,5];

const outputs = arr.map((number) => {return number**2});
console.log(outputs);
const arrays = [1,2,3,4,5,6,7,8,9];
const reducefunction = (acc,cur)=> acc + cur;
const out1 = arrays.reduce(reducefunction,0);
console.log(out1);
// arguments
function cals () {
    arguments[0] = 9;
}
console.log(cals(4,5,6,7,8,9,11,23));
//rest 
function calculas(a,b,...rest){
    return a+b;
}
console.log(calculas(12,23,45,67,89));
//Reccursion
function cal11(number){
    if(number === 1){
        return number;
    }
    return number + cal11(number-1);
}
console.log(cal11(10))