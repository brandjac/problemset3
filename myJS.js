/*
* Excercise 1
*
*/

const clicker = document.getElementById("color-block");

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    const colorblock = document.getElementById("color-block");
    const colorname = document.getElementById("color-name");
    console.log(colorblock.style.background)
    if (colorblock.style.background =="rgb(0, 0, 255)"){
        //change the background color using JS
        colorblock.style.background = "#F08080";
        //Change the text of the color using the span id color-name
        colorname.style.color ="#000000";

    }
    else{
        //change the background color using JS
        colorblock.style.background = "#0000ff";
        //Change the text of the color using the span id color-name
        colorname.style.color ="#00ff40";

    }
}

clicker.addEventListener("click", changeColor);
/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.getElementById("convertbtn");
button.addEventListener("click", convertTemp)


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    const input = document.getElementById("f-input")
    const button = document.getElementById("convertbtn")
    //Calculate the temperature here
    let number = input.value;
    number = (number - 32) * (5/9);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerText = number;
}

button.addEventListener("click", convertTemp)



