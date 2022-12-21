// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



let allpossible

let passwordLength = prompt('How long would you like your password? 8-128 characters');


let passwordUpper = confirm('Include upper case?');
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let passwordLower = confirm('Include lower case');
let lowercase = 'abcdefghijklmnopqrstuvwxyz';

let passwordNumeric = confirm('Include numbers?');
let numeric = '0123456789';

let passwordSpecialcharacters = confirm('Include special characters?');
let specialcharacters = '!@#$%&*_';

if (passwordUpper) {
  allpossible += uppercase
}

if (passwordLower) {
  allpossible += lowercase
}

if (passwordNumeric) {
  allpossible += numeric
}

if (passwordSpecialcharacters) {
  allpossible += specialcharacters
}

for (let index = 0; index < passwordLength; index++) {
let randomIndex = Math.floor(Math.random()*allpossible.length)
  console.log(allpossible[randomIndex])
}

function pass() {
  let display = document.querySelector("#password")
  display.value = allpossible
}

generateBtn.addEventListener("click", writePassword);
// let pass = alert(randomIndex[0], randomIndex[1], randomIndex[2], randomIndex[3], randomIndex[4], randomIndex[5], randomIndex[6], randomIndex[7])

// alert(randomIndex)

// if (allpossible) {
//   alert(allpossible[randomIndex])
// }

// let allpossible = 

//stick the string the on the page and then

// if (passwordUpper) {
// alert('you chose uppercase')
// }

