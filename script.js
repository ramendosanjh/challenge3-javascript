// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = promptUserForPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to prompt user for password criteria and generate a new password
function promptUserForPassword() {
  // Prompt for password length
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
  var length = parseInt(passwordLength);

  // Validate the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialCharacters = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Please select at least one character type.");
    return "";
  }

  return generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters);
}

// Function to generate a new password
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var charset = "";

  if (includeLowercase) {
    charset += lowercaseChars;
  }

  if (includeUppercase) {
    charset += uppercaseChars;
  }

  if (includeNumbers) {
    charset += numberChars;
  }

  if (includeSpecialCharacters) {
    charset += specialChars;
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
