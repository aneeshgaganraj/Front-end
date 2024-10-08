const val = "i like to code in light mode";
if(val.includes("lightd")){
    console.log("Present");
}
else{
    console.log("Not")
}
//includes method in String will return a booolean value to know whether its present or not
const vowels = "AEIOU";
let flag = false;
for(let char of val){
    if(vowels.includes(char.toUpperCase())){
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}
if(flag === true){
    console.log("String have vowels");
}
else{
    console.log("No vowels");
}
//Lower Case Upper Case
const message = "Hi How are you are u good one";
console.log(message.toLowerCase());
console.log(message.toUpperCase());
//substring
const subs = message.substring(0,9);
console.log(subs + ".....");
//trim used to remove spaces
const trims = "                  hi how are you                ";
console.log(trims);
console.log(trims.substring(0,6));
console.log(trims.trim());
console.log(trims.trim().substring(0,6));
