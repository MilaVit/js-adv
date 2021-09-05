// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

let Person = function(firstAndLast) {

    this.getFullName = function () {
      return  firstAndLast;
    }

    this.getFistName = function () {
        return firstAndLast.split(' ')[0];
    }

    this.getLastName = function () {
        return firstAndLast.split(' ')[1];
    } 

    this.setfirstName = function (name) {
        return firstAndLast = name.split(' ')[0];
    }

    
    this.setLastName = function (surname) {
        return firstAndLast = surname.split(' ')[1];
    }
    this.setFullName = function (fullname) {
        return firstAndLast = fullname;
    }
};
  
const BOB = new Person('Bob Ross');
 
console.log( BOB.getFullName())





  





