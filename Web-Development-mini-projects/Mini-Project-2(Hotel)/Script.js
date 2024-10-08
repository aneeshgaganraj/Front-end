console.log('Hello');
alert("This is my Hotel Web Page");
console.log(document.querySelector('h1'));
console.dir(document.body);
console.dir(document.querySelectorAll('p'));
console.dir(document.querySelector('.navbar'));
let textbox = document.querySelector("#display12");
let blackbutton = document.querySelector("#sub1");
blackbutton.addEventListener("click" , function(){
    textbox.value = "Your Details is Recorded By Our Team Thank You";
    textbox.style.backgroundcolor = 'yellow';
    textbox.style.color = "Black";
    textbox.style.fontsize = "25px";
    textbox.style.fontweight = "bold";
});


