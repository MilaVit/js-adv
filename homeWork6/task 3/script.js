// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.


function addTogether () {
    const num1 = arguments[0];
    if (arguments.length === 2) {
        if(typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') {
            return undefined
        }
        return arguments[0] + arguments[1]
    }

    return function recursiveFunc (num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return undefined
        }
        return num1 + num2
    }
}
  console.log(addTogether(2, 3))
  console.log(addTogether(2)(4))
  console.log(addTogether(1,2))
