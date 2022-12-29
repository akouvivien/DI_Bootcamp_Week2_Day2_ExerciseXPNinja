// XPNinja
// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

const Year = new Date().getFullYear();
let dayOneBirth = prompt("saisissez la première date de naissance :");
let dayTwoBirth = prompt("saisissez la seconde date de naissance :");
let yearOnePerson = Year - dayOneBirth ;
let yearTwoPerson = Year - dayTwoBirth;
let nbreYear;
if ( yearOnePerson > yearTwoPerson) {
    nbreYear = yearOnePerson - 2*yearTwoPerson;
}
else {
    nbreYear = yearTwoPerson - 2*yearOnePerson;
}

alert(`l'année est ${Year + nbreYear}`);

// *************Exercise 2 : Zip Codes**********
// While working in a Post Office you must have the clients’ 
// zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

let postalCode= prompt("entrez votre code postal")
lengthOfcode = postalCode.length
value = parseInt(postalCode)

if (lengthOfcode == 5 && value >=0 ){
    console.log("succes")
} else { console.log("error")
    }

//  Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions
 let code = prompt("entrez votre code postal")
 const reg = /^[0-9]{5}(?:-[0-9]{4})?$/; 

 if (re.test(code)){
    console.log("sucess")
 } else {
    console.log("error")
 }



// ************* Exercise 3 : Secret Word*************
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
let word = prompt("ecrivez un mot")
// Delete all the vowels of the word and console.log the result.
let expression = word.replace(/a|e|i|o|u|y/gi, " ")
console.log(expression)
