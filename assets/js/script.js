// Assignment code here


// Prompts for Password Criteria//
var passwordLength = function PwordLength () {window.prompt("Choose Length of Passowrd between 8-128 characters");}
                        passwordLength();
                        if (passwordLength >=8 && passwordLength < 128) {
                          var LengthConfirm = window.confirm("You chose password lenth of " + passwordLength +".  Do you confirm that is correct?");
                        if (LenthConfirm) {window.alert("You have chosen" + passwordLength + "characters");}
                          else if {passwordLength()};


var includeLowerCase = function LCase() {window.prompt("Include lowercase letters in password: Yes or No?");}
                        includeLowerCase();
                        if (includeLowerCase === "Yes" || "YES" || "yes") {
                          var LCaseConfirm = window.confirm("Please confirm you want to include lowercase letters?");
                        if (LCaseConfirm) {window.alert("You have chosen to include lowercase letters");}
                          else if {includeLowerCase()};


var includeUpperCase = function UCase() {window.prompt("Include uppercase letters in passowrd: Yes or No?");}
                        includeUpperCase();
                        if (includeUpperCase === "Yes" || "YES" || "yes") {
                          var UCaseConfirm = window.confirm("Please confirm you want to include uppercase letters?");
                        if (UCaseConfirm) {window.alert("You have chosen to include uppercase letters");}
                          else if {includeUpperCase()};


var includeNumbers = function NumberInc() {window.prompt("Include numbers in your password: Yes or No?");}
                          includeNumbers();
                          if (includeNumbers === "Yes" || "YES" || "yes") {
                            var NumberConfirm = window.confirm("Please confirm you want to include numbers?");
                          if (NumberConfirm) {window.alert("You have chosen to include numbers");}
                            else if {includeNumbers()};


var includeSpecials = function SpecialsInc() {window.prompt("Include special characters in passowrd: Yes or No?");}
                          includeSpecials();
                          if (includeSpecials === "Yes" || "YES" || "yes") {
                            var SpecialsConfirm = window.confirm("Please confirm you want to special characters");
                          if (SpecialsConfirm) {window.alert("You have chosen to include special characters");}
                            else if {includeSpecials()};



//Generating String With Allowed Characters//

const lowerC ="abcdefghijklmnopqrstuvwxyz";
const UpperC ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers="0123456789";
const Specials="!@#$%^&*_-+=";


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Specials = ['!','@', '#', '$', '%', '&', "_", '*', '?'];







//Code to Generate Random Password//









if (passwordLength < 8){var tooShort = function(){window.alert ("You chose" + passwordLength + ".  Your password must be longer");
passwordLength;
};

else if (passwordLenth > 128){var tooLong = function(){window.alert("You chose" + )}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
