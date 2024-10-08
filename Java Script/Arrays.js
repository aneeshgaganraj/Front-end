let Students = ["Aneesh","Gagan","Raj","Human",1,2,3,4,5,[2,4,6]];
console.log(Students);
console.log(Students[1]);
for(let i = 0; i < Students.length;i++){
    console.log(Students[i]);
}
for(let i of Students){
    console.log(i);
}
for(let i in Students){
    console.log(i);
}
//in Array in JS we Can Store Heterogenous data
//Arrays are Mutable
fruits = ["Apple","Orange"]
console.log(fruits);
fruits.push("KIWI");
console.log(fruits);
fruits.push("Mango","BlueBerry","Tobaco");
console.log(fruits)
//Concat
let arr1 = [12,34,56];
let arr2 = [1,2,3];
let arr3 = arr1.concat(arr2);
console.log(arr3);
//concat two arrays
let arr4  = arr1.concat(arr2,arr3);
console.log(arr4);
//Using POP We remove The Last Element
let Course = ["HTML","CSS","JavaScript","Bootstrap","Core Java","Python","Manual Testing"];
let remove = Course.pop();
console.log("Updated -",Course);
console.log(remove);
//Slice used to acess elemnts but with a range
let numms = [1,2,3,4,5,6,7,8,9];
console.log(numms.slice(2,4));
console.log(numms);
let vals12 = numms.slice(2,6);
console.log(vals12);
//Eg
let str = "aneesh";
let first = str[0].toUpperCase();
let name1 = first + str.slice(1);
console.log(name1);
//Splice used to remove or add an elemnt from array and insert new one there
let course = ["App","Mt","FEt","Java","Python","Mongodb"];
course.splice(0,1);
console.log(course);
course.splice(1,1,"Frontend");
console.log(course);
//Eg to add an elemnt before 0th index so delete count = 0
course.splice(0,0,"Apptitude");
console.log(course);
//includes
const arr12 = ["S","M","L","XL","XXl","XXL"];
const available = arr12.includes("XL");
console.log(available)

