const user1 = {
    name : "Aneesh"
};
function sayhai () {
    console.log(this.name); 
}
const user2 = {
    name : "gagan"
}
sayhai.call(user1);//using call we can pass the parameters
//This process is called explicit binding or function borrwing
//Learn about implicit and explicit binding
sayhai.apply(user2);
