//This refers to the object that is executing the function
const obj = {
    name : "Aneesh",
    displaymessage : function () {
        console.log(this.name);//the process of this keyword is called as implicit binding here this keyword will refer to obj
    }
};
obj.displaymessage()
//Note in regular function if the function is not refering to any object then this refers to a global object
function clac() {
    console.log(this);
}
clac()
//Note if u use this in an arrow function it will refer to global object even if its inside an object
const obj1 = {
    name : "Aneesh",
    showname : () => {
        console.log(this.name);
    },
};
obj1.showname()
//Creating Constructor
function User(){
    this.name = "Aneesh";
    this.age = 21;
}
//here because of the new keyword we are creating an global so this refers to function
const user = new User();
const user1 = new User("Gagan",23);
console.log(user);
console.log(user1);