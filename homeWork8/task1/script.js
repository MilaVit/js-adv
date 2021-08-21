let socks = [1,2,2,3,1,2,1,5,6];
let numCount = 9;

function countSocks(count, arr) {
    let orderNum = arr.sort((n1,n2) => n1-n2);
    let result = count-1;

    orderNum.forEach((item) => {
         return (arr[item]===arr[item+1]) ? result : result--;
    })

    return result
}

console.log(countSocks(numCount, socks))