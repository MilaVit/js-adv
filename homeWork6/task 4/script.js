


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
console.log(BOB.getFistName())
console.log( BOB.setfirstName('bbb hhh'))
console.log( BOB.setLastName('bbb hhh'))




  





