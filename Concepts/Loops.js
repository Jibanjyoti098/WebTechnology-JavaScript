// !Loops
// & To execute a set of code again and again untill condition is false
//* 1. for loop (Entry  control  Loop)
//* {} - obj notation 
//* [] - arr notation

for (let i = 1; i <= 5; i++) {
    document.writeln(`<h1>${i}</h1>`)
}

var arr = ['jinka chika', 'modi modi modi', 'angena ghatram', 'zero civic sense']
for (let i = 0; i < arr.length; i++) {
    document.writeln(`${arr[i]} <br/> <hr/>`)
}
//* 2. while loop
var i = 1
while (i<5) {
    console.log('while',i)
    i+=1
}
//* 3. do-while loop
var i = 1
do{
    console.log('do',i)
    i++
}while(i<=5);
//* 4. for-of loop
//& Designed to iteraate arrays
var  arr = ['a', 'b', 'c', 'd']
for(var i of arr){
    document.writeln(i)
}
//* 5. for-in loop
//& Defined for objects
var obj = {
    username:  'students',
    age:22,
    email:'jibanjyoti@gmail.com'
}

for(var key in obj){
    console.log(key,':',obj[key]);
}

// ! Write a js program to count howmanu vowels are present in a given string
// str1 = 'abcdefghi'
// str2 = 'aeiou'
// str3 = 'aabbccdd'
str = 'aeiou'
var c = 0
for(var i of str){
    if (i=='a'||i=='e'||i=='i'||i=='o'||i=='u') {
        c++
    } 
}
console.log(c);

// ! Write a js program to count howmanu consonants are present in a given string
str = 'aabbccdd'
var c = 0
for(var i of str){
   if (i!='a'&&i!='e'&&i!='i'&&i!='o'&&i!='u') {
    c++
} 
}
console.log(c);
