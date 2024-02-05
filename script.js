/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let optionOneButton= document.querySelector(".school");
let changeText= document.querySelector(".title");
let text= document.querySelector("h1");
let optionTwoButton= document.querySelector(".noschool");
let end1 = document.querySelector(".option-one-end");
let changeBackground = document.querySelector("body");
let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let end2 = document.querySelector(".option-two-end");
let buttons = document.querySelector(".buttons");
let body=document.querySelector("body");







/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/
optionOneButton.onclick=function(){
    opening.style.display = "none";
    buttons.style.display ="none";
    screen1.style.display = "block";
    changeText.innerHTML = " you'll get what you deserve";
    changeText.style.color = "purple";
    end1.style.display = "block";
    body.style.backgroundColor= "#e7d8ed";




};

optionTwoButton.onclick=function(){
    opening.style.display = "none";
    buttons.style.display = "none";
    screen2.style.display="block";
    changeText.innerHTML = " This is your fate";
    end2.style.display = "block";
    body.style.backgroundColor= "#e7d8ed";


};

body.onkeydown=function(){
body.style.backgroundColor="#ebc0db";
};


/*
INSERT_VARIABLE.onclick=function(){
opening.style.display = "hide";
    console.log("hi")


};
/*


INSERT_VARIABLE.onclick=function(){

};

*/
/*button.onclick = function() {
   button.style = "color: blue";
};
*/







