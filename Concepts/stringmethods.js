// const str = 'hello'
// console.log(str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str.indexOf('l'));
// console.log(str.indexOf('z'));
// console.log(str.lastIndexOf('l'));
// console.log(str.includes('hel'));
// console.log(str.includes('hl'));//Finding
// console.log(str.startsWith('h'));//Searching
// console.log(str.endsWith('p'));
// console.log(str.slice(0,3));
// console.log(str.slice(-3));
// console.log(str.at());
// console.log(str.charAt(2));
// console.log(str.charCodeAt(0));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(String.fromCharCode(65));
// let mynum = '044'
// console.log(mynum.padStart(10,'X'));

// let sundari = '893'
// console.log(sundari.padEnd(10,'X'));
// const str = 'Anaconda\n'
// console.log(str.repeat(20));
// const s = 'The smaller the soul'
// console.log(s.split(' '));
// const userName = '  Janmjaat Gandu '
// console.log(userName.trim());
// console.log(userName.trimStart());
// console.log(userName.trimEnd());
const val = 200
console.log(val.toString());
console.log(typeof val.toString());

//! Wap to find the unique char in a string
// function UniqueChar(str, c) {
//     for (const i of str) {
//         if (str.indexOf(i)==str.lastIndexOf(i)){
//             c++
//         }
//     }
//     console.log(c);
// }
// UniqueChar("Kalaoo", 0)

//! Wap to create a user password input = username and mobile number, output = first 3 char of user name last 4 dig

// function generatePass(username, mobile) {
//     let password = username.slice(0,3)+'@'+String(mobile).slice(-4)
//     console.log(password);
// }
// generatePass(prompt('Enter user name: '),Number(prompt('Enter no:')))

//! Wap to convert a given str from lower to upper without using inbuild

// function convertToUpper(str) {
//     let op = ''
//     for (let i = 0; i<str.length;i++) {
//         op = op + String.fromCharCode((str.charCodeAt(i)-32))
//     }
//     console.log(op);
// }
// convertToUpper('fcuk')