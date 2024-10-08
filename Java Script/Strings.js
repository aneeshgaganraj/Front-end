let display = "Iam Aneesh";
let count = 0;
for(let char of display){
    if(char == " "){
        continue;
    }
    else{
        console.log(char);
    }
    if(char == "e"){
        count++;
    }
}
console.log(count);
for(let char1 in display){
    console.log(char1);
}
console.log(display[1]);
console.log(display[2]);
for(let i = 0; i < display.length;i++){
    if(i == " "){
        continue;
    }
    else{
        console.log(display[i]);

    }
}