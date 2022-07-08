console.clear();

const numbers = [
    [1, 2, 3, 4,],
    [11, 22, 33, 44,],
    [111, 222, 333, 444,],
];

let sum = 0;
//1 uzdatys
// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     for (let j = 0; j < numbers[i].length; j++) {
//         console.log(numbers[i][j]);
//         sum+=numbers[i][j];
//     }

// }

//2 uzduotis
for (let i = 0; i < (numbers.length * numbers[0].length); i++) {
    // let x = Math.floor(i / numbers.length+1);
    let y = i % numbers[0].length;
    let x = Math.floor((i - y) / numbers.length);
    console.log(x, y);

    sum += numbers[x][y];
}


console.log(sum);

/*
i=0 : [0][0]
i=1 : [0][1]
i=2 : [0][2]
i=3 : [0][3]
i=4 : [1][0]
i=5 : [1][1]
i=6 : [1][2]
i=7 : [1][3]
i=8 : [2][0]
i=9 : [2][1]
i=10 : [2][2]
i=11 : [2][3]
*/

//Kokia yra visu skaiciu suma?
//kaip 11-20 eilutes perrasyti su maziau ciklu.Simetriskas masyvas 3x4, 4x5, 7x2