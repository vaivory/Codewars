// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

console.log();

//function testEven(n) {
    // if (n%2==0) {
       
    //     return true;
    // }   return false;
    //arba terneris
  // return (n%2==0 ? true : false);
//}

//arba const test return (isMember ? '$2.00' : '$10.00');
//const testEven = (n) => (n%2===0) ? true : false;
//sutrumpinam terneri
const testEven = (n) => n%2===0;


console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");