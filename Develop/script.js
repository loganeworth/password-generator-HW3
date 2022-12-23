// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  let passwordPrompt = prompt('How long would you like your password? 8-128 characters');
  let passwordLength = parseInt(passwordPrompt)
  if (passwordPrompt < 8 || passwordPrompt > 128 || isNaN(passwordPrompt)) {
    alert("Check your length!!")
    return
  }

  let genPassword = ""
  let allpossible = []

  
  
  let passwordUpper = confirm('Include upper case?');
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  let passwordLower = confirm('Include lower case');
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  
  let passwordNumeric = confirm('Include numbers?');
  let numeric = '0123456789';
  
  let passwordSpecialcharacters = confirm('Include special characters?');
  let specialcharacters = '!@#$%&*_';
  console.log(passwordPrompt)


  if (passwordUpper) {
    allpossible += uppercase
  };
  
  if (passwordLower) {
    allpossible += lowercase
  };
  
  if (passwordNumeric) {
    allpossible += numeric
  };
  
  if (passwordSpecialcharacters) {
    allpossible += specialcharacters
  };
  
  for (let index = 0; index < passwordLength; index++) {
  let randomIndex = Math.floor(Math.random()*allpossible.length)
    let passChar = allpossible[randomIndex];
    genPassword += passChar;
    console.log(passChar)

  }
  
  return genPassword


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




