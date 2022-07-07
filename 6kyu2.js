//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

console.clear();

function cleanString(s) {
    let newString = '';  //galima iskart sukurti kintamaji reikiamos reiksmes kuri mes gale grazinsim.

    for (const symbol of s) {
        if (symbol !== '#') {
            newString += symbol;
        } else {
            newString = newString.slice(0, -1);
        }
    }

    return newString;
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');