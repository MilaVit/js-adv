// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


const str1 = "()",
str2 = "()[]{}",
str3 = "(]",
str4 = "([)]",
str5 = "{[]}";

function validateBrackets(str) {
    let count = [];
    for (let i=0; i<str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[')  count.push(findBrackets(str[i]))
        else if (!count.length || count.pop() !== str[i]) return false;
    }
    return count.length === 0;
};

function findBrackets(bracket) {
    switch(bracket) {
        case '(': return ')';
        case '{': return '}';
        case '[': return ']';
    }
}

console.log(validateBrackets(str1));
console.log(validateBrackets(str2));
console.log(validateBrackets(str3));
console.log(validateBrackets(str4));
console.log(validateBrackets(str5));

