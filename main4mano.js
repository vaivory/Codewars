//"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

console.clear();



function correctPolishLetters(string) {
    let polishLetters = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z",
        "Ą": "A"
    };
    let newString = '';

    for (let raide of string) {
        if (polishLetters[raide]) {
            newString+=polishLetters[raide];
        } else {
            newString+=raide;
        }
        
    }

    return newString;

    // for (let i = 0; i < string.length; i++) {
    //     // console.log(string[i]);
    //     if (string[i] === 'ą') {
    //         newString += 'a';
    //     } else if (string[i] === 'ć') {
    //         newString += 'c';
    //     } else if (string[i] === 'ę') {
    //         newString += 'e';
    //     } else if (string[i] === 'ł') {
    //         newString += 'l';
    //     } else if (string[i] === 'ń') {
    //         newString += 'n';
    //     } else if (string[i] === 'ó') {
    //         newString += 'o';
    //     } else if (string[i] === 'ś') {
    //         newString += 's';
    //     } else if (string[i] === 'ź') {
    //         newString += 'z';
    //     } else if (string[i] === 'ż') {
    //         newString += 'z';
    //     } else {
    //         newString += string[i];
    //     }
    // }
    // return newString;
}


console.log(correctPolishLetters("ĄJędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");
console.log(correctPolishLetters("Władysław Reymont"), "Wladyslaw Reymont");


// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

//     return string.replace('ą','a').replace('ę','e').replace('ć','c').replace('ł','l').replace('ń','n').replace('ó','o')
    // .replace('ś','s').replace('ź','z').replace('ż','z'); 