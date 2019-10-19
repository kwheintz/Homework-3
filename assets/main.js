// -------------DOM VARS-----------------

var display = document.querySelector("#pwbox");
var genBtn = document.querySelector('#generate').addEventListener("click", doGenPass)

// -------------GLOBAL VARS-----------------
var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allNum = "0123456789";
var userPassLength;
var finalPass;
var generatedPass = [];


// -------------FUNCTIONS-----------------


// This function will set/reset global vars  
function init(){
    serPassLength= null
    finalPass= null
    generatedPass = []
}

// this function will display content to the screen
function render (){
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

    for (var i = 0; i < userPassLength; i++) {
        var userChar = charList.charAt(Math.floor(Math.random() * charList.length));
        generatedPass.push(userChar);
    }
    finalPass = generatedPass.join('');

    render()
    
    console.log(finalPass);

}