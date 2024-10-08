let username = "Aneesh";
try{
    console.log(myname);//Error Code is written here
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Error Occcured");
}
finally{
    console.log("Finally Block");
}
console.log(username);