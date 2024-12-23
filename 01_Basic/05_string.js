/*
let str1 = "hello"
console.log(str1.length) // 5
console.log(str1.split('')) // [ 'h', 'e', 'l', 'l', 'o' ]
let str2 = "akhi-the-great"
console.log(str2.split('-')) // [ 'akhi', 'the', 'great' ]
console.log (str2.split('', 6)) // [ 'a', 'k', 'h', 'i', '-', 't' ]
*/

let str3 = "   Hello   "
console.log(str3.trim()) // "Hello" (Remove white spaces)
console.log(str3.trim().toUpperCase()) // "HELLO"
console.log(str3.toLowerCase()) // "   hello   "
console.log(str3.trim().substring(0,4)) // Hell


//NOTE- Use backticks (`) and ${} for variable interpolation.
let myAvgMarks = (100+90+75)/3
console.log( `My first string is ${myAvgMarks}`)  // My first string is 88.33333587646484

