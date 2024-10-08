console.log("hello")
let getbutton = document.getElementById("btn-pri");
console.log(getbutton);
let getbuttons = document.getElementById("btn-sec");
console.log(getbuttons);
let ones = document.querySelector(".third");
console.log(ones);
let sec = document.querySelector(".fourth");
console.log(sec);


//Eg-2
let StartButton = document.querySelector(".button");
function showmessage(){
    console.log("Button");
}
//StartButton.addEventListener("click",showmessage);
StartButton.addEventListener("click",() => {
    console.log("clicked")
})
StartButton.addEventListener("click",() => {
    if(StartButton.innerText = "Primary"){
        StartButton.innerText = "BEGIN"
        StartButton.innerHTML = "<span>Lets Start</span>"
    }else {
        StartButton.innerText = "Start"
    }
})
let countbutton = document.querySelector(".fourth");
let value = 0;
countbutton.addEventListener("click",() => {
    value++;
    console.log(value);
})
let stops = document.querySelector(".third");
stops.addEventListener("click", () => {
    //stops.classList.add("btn-red");
    stops.classList.toggle("btn-red");
})
let input = document.querySelector(".input");
input.addEventListener("change", () => {
    console.log(input.value);
})
input.addEventListener("input", () => {
    console.log(input.value);
})
//Mouse Events
input.addEventListener("mousedown",(event) => {
    console.log(event.button);
})
input.addEventListener("mousedown",(event) => {
    let xcor = event.pageX;
    let ycor = event.pageY;
    let cors = `Xcor = ${xcor} and y is  ${ycor}`;
    console.log(cors);
})
document.body.addEventListener("mousedown",(event) => {
    let xcor = event.clientX;
    let ycor = event.clientY;
    let cors = `Xcor = ${xcor} and y is  ${ycor}`;
    console.log(cors);
})