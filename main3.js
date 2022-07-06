// Array Madness
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a 
// is strictly greater than the sum of the cubes of each element in b.

console.clear();

function arrayMadness(a, b) {
   // console.log(a);
    let total2=0;
    let total3=0;
    for (let i=0; i<a.length;i++) {     
        total2 += a[i]**2;
      //  console.log(total);
    }
    for (let i=0; i<b.length;i++) {     
        total3 += b[i]**3;
//console.log(total3);
    }
    // if (total2>total3) {
    //     return true
    //         }  return false
    return total2>total3;
  }

  console.log(arrayMadness([4,5,6],[1,2,3]), true);
  console.log(arrayMadness([5,6,7],[4,5,6]), false);
  console.log(arrayMadness([4,5,6],[3,4,5]), false);
  console.log(arrayMadness([3,4,5],[2,3,4]), false);
  console.log(arrayMadness([2,3,4],[1,2,3]), false);
  console.log(arrayMadness([1,2,3],[0,1,2]), true);
  console.log(arrayMadness([5,3,2,4,1],[15]), false);
  console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
  console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
  console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
  console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false)