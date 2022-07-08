//https://www.codewars.com/collections/front-end-by-rimantas-2
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {

    let newArray = name.split(' ');

    return (newArray[0][0] + '.' + newArray[1][0]).toUpperCase();

}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");