console.log("Following are the operators Enter yor Choice");
console.log("+ for add - sub and * for mul / for divide");
let a = 23;
let b = 24;
console.log(`First value = ${a} and second one is ${b}`);
let choice = prompt("Enter");
switch(choice){
    case '+' :   console.log(a+b);
               break; 
    case '' :   console.log(a-b);
               break; 
    case '*' :   console.log(a*b);
               break; 
   case '/' :   console.log(a/b);
               break; 
    default : console.log("Invalid Output");
}