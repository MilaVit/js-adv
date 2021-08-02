const obj = { a: 1, b: 2, c: 3 },

  obj1 = { c: 4, d: 5 };

function mixin(obj1, obj2) { 
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
        obj1[key] = obj2[key];
      }
    }
    
    return obj1
  }

console.log(mixin(obj, obj1))


