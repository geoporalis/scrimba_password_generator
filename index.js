// const chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

const bigletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const smallletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specials= ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn");
let passoneBtn = document.getElementById("passone-btn");
let passtwoBtn = document.getElementById("passtwo-btn");
let lengthIpt = document.getElementById("length-ipt");
let smallChk = document.getElementById("small-ipt");
let bigChk = document.getElementById("big-ipt");
let numChk = document.getElementById("num-ipt");
let charChk = document.getElementById("char-ipt");
let passone;
let passtwo;

generateBtn.addEventListener("click", generateRandomPassword);
passoneBtn.addEventListener("click",
    function(event) {
        copyTextToClipboard(passone);
    }                            
);

passtwoBtn.addEventListener("click", 
    function(event) {
        copyTextToClipboard(passtwo);
    }                                         
);

const passwordLength = 15;

function getRandomCharacter(characters) {
    
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    const characters = getCharacterArray();
    const passwordLength = (lengthIpt.value !== "") ? lengthIpt.value : lengthIpt.placeholder;
        
    if(characters.length < 9){
        passone = 'please review';
        passtwo = 'your selection';
    } else {
        let randomPassword = ""
        for (let i = 0; i < passwordLength*2; i++) {
            randomPassword += getRandomCharacter(characters);         
        }
        passone = randomPassword.slice(0,passwordLength);
        passtwo = randomPassword.slice(passwordLength);
        
    }
    
    passoneBtn.innerHTML = esc(passone);
    passtwoBtn.innerHTML = esc(passtwo);
}

function getCharacterArray() {
    let characters = [];
    
    if (smallChk.checked) {
        characters.push(...smallletters)
    }
    if (bigChk.checked) {
        characters.push(...bigletters)
    }
    if (numChk.checked) {
        characters.push(...numbers)
    }
    if (charChk.checked) {
        characters.push(...specials)
    }
    
    return characters;
}

    function copyTextToClipboard(text) {
        // if (!navigator.clipboard) {
        //     fallbackCopyTextToClipboard(text);
        //     return;
        // }
        navigator.clipboard.writeText(text).then(function() {
            // console.log('Async: Copying to clipboard was successful!');
            alert("Copied to clipboard: " + text);
        }, function(err) {
            // console.error('Async: Could not copy text: ', err);
            alert("Error during copying: " + text);
        });
    }

function esc(str){ return new Option(str).innerHTML; }
