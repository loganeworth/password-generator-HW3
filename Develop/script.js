// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  let passwordPrompt = prompt('How long would you like your password? 8-128 characters');
  let passwordLength = parseInt(passwordPrompt)
  if (passwordPrompt < 8 || passwordPrompt > 128 || isNaN(passwordPrompt)) {
    alert("Check your length!!")
    
  }

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
  
//below is testing code

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
  




// commented out code, will comeback to

  // if (passwordUpper) {
  //   allpossible.push(passwordUpper)
  // }
  
  // if (passwordLower) {
  //   allpossible.push(passwordLower)
  // }
  
  // if (passwordNumeric) {
  //   allpossible.push(passwordNumeric)
  // }
  
  // if (passwordSpecialcharacters) {
  //   allpossible.push(passwordSpecialcharacters)
  // }

  // for (let index = 0; index < passwordLength; index++) {
  //   let randomIndex = Math.floor(Math.random()*allpossible.length)
  //     console.log(allpossible[randomIndex])
  // }

// comeback to above commented out code


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
















// NEED TO COMMENT OUT BELOW
// Assignment Code
// var generateBtn = document.querySelector("#generate");

// function generatePassword() {
  
// }

// // Write password to the #password input
// var password = generatePassword();
// function writePassword() {
//   // var password = generatePassword();
//   let passwordPrompt = prompt('How long would you like your password? 8-128 characters');
//   let passwordLength = parseInt(passwordPrompt)
//   if (passwordPrompt < 8 || passwordPrompt > 128 || isNaN(passwordPrompt)) {
//     alert("Check your length!!")
    
//   }

//   let allpossible = []

  
  
//   let passwordUpper = confirm('Include upper case?');
//   let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
//   let passwordLower = confirm('Include lower case');
//   let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  
//   let passwordNumeric = confirm('Include numbers?');
//   let numeric = '0123456789';
  
//   let passwordSpecialcharacters = confirm('Include special characters?');
//   let specialcharacters = '!@#$%&*_';
//   console.log(passwordPrompt)
//   if (passwordUpper) {
//     allpossible.push(passwordUpper)
//   }
  
//   if (passwordLower) {
//     allpossible.push(passwordLower)
//   }
  
//   if (passwordNumeric) {
//     allpossible.push(passwordNumeric)
//   }
  
//   if (passwordSpecialcharacters) {
//     allpossible.push(passwordSpecialcharacters)
//   }

//   for (let index = 0; index < passwordLength; index++) {
//     let randomIndex = Math.floor(Math.random()*allpossible.length)
//       console.log(allpossible[randomIndex])
//   }  
// }
//   var passwordText = document.querySelector("#password");
  

//   passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//ABOVE IS MAIN OF WHAT WAS WORKING ON

// let allpossible

// let passwordLength = prompt('How long would you like your password? 8-128 characters');


// let passwordUpper = confirm('Include upper case?');
// let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// let passwordLower = confirm('Include lower case');
// let lowercase = 'abcdefghijklmnopqrstuvwxyz';

// let passwordNumeric = confirm('Include numbers?');
// let numeric = '0123456789';

// let passwordSpecialcharacters = confirm('Include special characters?');
// let specialcharacters = '!@#$%&*_';

// if (passwordUpper) {
//   allpossible += uppercase
// }

// if (passwordLower) {
//   allpossible += lowercase
// }

// if (passwordNumeric) {
//   allpossible += numeric
// }

// if (passwordSpecialcharacters) {
//   allpossible += specialcharacters
// }

// for (let index = 0; index < passwordLength; index++) {
// let randomIndex = Math.floor(Math.random()*allpossible.length)
//   console.log(allpossible[randomIndex])
// }

// function pass() {
//   let display = document.querySelector("#password")
//   display.value = allpossible
// }

// generateBtn.addEventListener("click", writePassword);
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

