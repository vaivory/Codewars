// 8kyu -------------------------------------------- Convert number to reversed array of digits

function digitize(n) {
    //codec here
    n = 123456;

    //codec here

    let array = (Array.from(String(n), Number));
    console.log('Pradinis arary', array);
    const rev = array.reverse();

    return console.log('Reversed array', rev);
}


digitize();

// var arr = [1, 2, 3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected


// function digitize(n) {
//     return [...String(n)].map(Number).reverse()
// }

//8kyu ------------------------------------------ Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
//jei nesutampa skaiciu lipistkov tai jie myli vienas kita, jei sutampa tai nemyli.

function lovefunc(flower1, flower2) {
    // moment of truth
    console.log(flower1);
    console.log(flower2);

    return console.log('Myli-nemyli:', flower1 % 2 !== flower2 % 2);
}
lovefunc(1, 4);

//8kyu ------------------------------------------------------------- Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade(s1, s2, s3) {
    const grade = (s1 + s2 + s3) / 3;
    console.log(grade);
    if (grade >= 90 && grade <= 100) {
        return console.log('A');
    } else if (grade >= 80 && grade < 90) {
        return console.log('B');
    }
    else if (grade >= 70 && grade < 80) {
        return console.log('C');

    } else if (grade >= 60 && grade < 70) {
        return console.log('D');
    } return console.log('F');
}

getGrade(95, 90, 93);

//8kyu------------------------------------Remove First and Last Character
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
    //You got this!
    console.log(str);
    str = str.slice(1, str.length - 1);
    console.log(str);

};
removeChar('abcd');

//8kyu-----------------------------------Convert a Boolean to a String
//Implement a function which convert the given boolean value into its string representation.



