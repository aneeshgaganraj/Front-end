const obj = {};//object Literal
console.log(typeof(obj))
const value = {
    name : "Prakash",
    age : 34,
    job : "Mentor",
    1 : "Number",
    courses : ["Frontend","CoreJava","Python","MongoDB","AdJava"],
    "is Admin" : true
}
console.log(value);
//Accesing values
console.log(value.age)
console.log(value["name"]);
//used to acces if key has multiple words
console.log(value["is Admin"])
//Passing functions as a key value pair and passing function without key
const obj1  = {
    name : "Aneesh Gagan Raj",
    greetmessage : function(){
        console.log("Hi How are You");
    },
    bye(){
        console.log("Bye")
    }
}
console.log(obj1.greetmessage);
obj1.greetmessage()
obj1.bye()  
//Adding Key value pairs to the objects
const course = 'html';
const faculty = "likhith"
const obj11 ={
    name: "Aneesh",
    Age : 21,
    [course] : "Course Not Available",
    [faculty] : "Notavaliable"
}
obj11.city = "Banglore";
obj11.State = "karnataka";
console.log(obj11["city"])
console.log(obj11);
//ShortHand Objects
function getobjects(name,city){
    return {
        name : name,
        city : city
    }
}
const name1 = "Aneesh";
const course111  = "CSD";
console.log({name1,course111})
//Object Reference and Shallow Copy
//here we only change the value of one object which is person1 and because of which other object value is also changed
//reason for this is objects are only call by reference reference means memeory when we create copy of person1 then that copy
//is also pointing to the same location so on modifying  the value both copies that is the original objects values and copied object values  are also changed so we only get a shallow copy of objects
const person1 = {
    name : "Aneesh",
    age : 21
}
let person2 = person1;
person1.age = 25;
console.log(person1)
console.log(person2)
//Assignment using asign operator will do deep copy 
const person3 = Object.assign({},person1);
person3.name = "Gagan";
person3.age = 23;
console.log(person3);
console.log(person1);
//Assignment using assign will do shadow copy for nested objects
const humans = {
    name :  "Aneesh",
    age : 21,
    address : {
        city : "Banglore",
        State : "Karnataka"
    }
}
const humans1 = Object.assign({},humans);
humans1.name = "Gagan";
humans1.address.State = "hyd"
console.log(humans);
console.log(humans1);
const creations = {
    name : "Aneesh",
    age : 21,
    address : {
        city : "Banglore",
        State : "Karnatak"
    },
    likes : "Hi How Are u",
    getcity: function () {
        console.log("Hi")
    }
}
console.log(creations.getcity());
//Variable Destructuring
let objection = {
    names : "Aneesh",
    address : {
        state : "kar",
        city : "Bang"
    },
    courses : ['Html,css','Bootsrap','JavaScript']
}
let {address,courses } = objection;
console.log(address);
let {names,...rest } = objection;
console.log(rest)
//Changing Key Names
let {names : username} = objection;
console.log(username)
//Using entries
const entries =  Object.entries(objection);
console.log(entries);
const vals =  Object.values(objection);
const keys =  Object.keys(objection);
console.log(vals);
console.log(keys)