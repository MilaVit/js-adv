const array = [1, 2, 3, 4]

function includes(arr, param) {
    let result = arr.indexOf(param);

    if(result === -1) return false
    else  return true
    
}

console.log(includes(array, 5))