// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

let arr1 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let arr2 = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let arr3 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
let arr4 = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

function returnArraysOfNumbers(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
    let elements = 0;
        for(let k = 0; k < array[i].length; k++) {
            if(elements < array[i][k] || elements > array[i][-k]) {
                elements = array[i][k]; 
            }
        }
        newArr.push(elements)
    }
    return newArr
}

// console.log(returnArraysOfNumbers(arr1));
// console.log(returnArraysOfNumbers(arr2))
// console.log(returnArraysOfNumbers(arr3))
// console.log(returnArraysOfNumbers(arr4))

arr1.map(function(num) {
    console.log(num)
})