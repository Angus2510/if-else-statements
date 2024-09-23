
//this is getting the input of the user 
let character = prompt("please input an Uppercase letter, a lowercase letter or a number")

// tis is to see if the string was a number and does a conversion to a number 
if(Number.isInteger(Math.round(Number (character)))){
    
    alert( `${character} "is a number"`)
}
// this step is to see if input was not an uppercase
else if(character !== character.toUpperCase()){
    alert(`${character} is an Lowercase letter`)

}
// this step is to see if the character was not a lowercase
else if(character !==character.toLowerCase()){
    alert(`${character} is a Uppercasecase letter`)
}
// this is to check if the input was niether a letter or number
else{ 
    alert( `${character} is not a letter or a number`)

}

