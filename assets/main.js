// -------------DOM VARS-----------------

var display = document.querySelector("#pwbox");
var genBtn = document.querySelector('#generate').addEventListener("click", doGenPass)
var textCopy = document.querySelector('#copytext').addEventListener("click", copyClipboard)

// -------------GLOBAL VARS-----------------
var charList = []; 
var charFinal;
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allNum = "0123456789";
var specialChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var userPassLength;
var finalPass;
var generatedPass = [];


// -------------FUNCTIONS-----------------


// This function will set/reset global vars  
function init(){
    serPassLength= null
    finalPass= null
    generatedPass = []
    charList = []
    charFinal = null
}

// this function will display content to the screen
function render () {
    display.textContent = finalPass;
}

function doGenPass () {
    
    init() // run init to reset global vars 

    var userPassLength = prompt("Enter a password length between 8 and 128 characters."); // save user's length to a var
    
    if(userPassLength < 8 || userPassLength > 129) {  
        alert("Please enter a valid password length.");
        /* Side note
            A function can call itself. So basically the following line will stop and restart the "doGenPass" function from the beginning
            if the user doesn't make a valid length choice. This essentially makes a looping effect without using the 
            traditional for loop 
        */
        return doGenPass()
    }
    
    var lowerselect = confirm("Include lower case letters?");

    var upperselect = confirm("Include upper case letter?");

    var numbselect = confirm("Include numbers?");

    var specialselect = confirm("Include special characters?");

    if(lowerselect) {
        charList.push(lowerLetters);
    } 
    if(upperselect) {
        charList.push(upperLetters);
    } 
    if(numbselect) {
        charList.push(allNum);
    } 
    if(specialselect) {
        charList.push(specialChars);
    }

    charFinal = charList.join('');

    for (var i = 0; i < userPassLength; i++) {
        var userChar = charFinal.charAt(Math.floor(Math.random() * charFinal.length));
        generatedPass.push(userChar);
    }
    finalPass = generatedPass.join('');

    render()
    
    console.log(finalPass);

}