//https://www.codewars.com/kata/55d24f55d7dd296eb9000030
//Grasshopper - Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
   let suma = 0;
//1versija   
//     for (i = 1; i <= num; i++) {
//         suma = suma + i;
//}
//2versija
// for (let i=1; i<=num;) {
//     suma +=i++;
// }
//3versija
// for (let i = num; i >0; i--) {
//         suma += i; }
//versija4
// for (let i = num; i; i--) {
//     suma += i; }
//versija5
// for (;num;) {
//     suma += num--; }
//versija6
// while (num) {
//     suma += num--;
//      }



    return suma;
 }



console.log(summation(1), 1);
console.log(summation(8), 36);