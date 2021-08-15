function palindrome(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const halfOfLength = Math.floor(str.length / 2);

    return str.substr(0, Math.floor(halfOfLength)) === str.substr(Math.floor(str.length % 2 ? halfOfLength + 1 
     : halfOfLength)).split('').reverse().join('')
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))