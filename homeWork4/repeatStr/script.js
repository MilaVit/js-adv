function repeatStr(paramStr, count) {
    let newStr = "";

    if(typeof paramStr !== "string") throw new Error("Your parameter is not a string!");

    if(count <= 0) throw new Error("The number cannot be less than zero!")

    do { 
        newStr += paramStr;
        count--;
    } while (count !== 0)
    
    return newStr
}
console.log(repeatStr("hello!", 2))
