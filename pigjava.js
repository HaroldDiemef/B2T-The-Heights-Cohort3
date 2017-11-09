//Asking user for a word
var word = prompt("Please enter the word you wish to convert to Pig Latin.");
//Reminding them of their word
document.getElementById('que').innerHTML = "The word you chose to convert to Pig Latin is: " + word;
//Changing and displaying user's word as Pig Latin
document.getElementById('ans').innerHTML = "Your Pig Latin is: " + word.slice(1) + word.charAt(0) +"ay";