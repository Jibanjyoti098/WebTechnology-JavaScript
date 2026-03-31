//& Types of functions
//! 1. Named function
//* A function having a name.
function Name(){
    console.log('My name is Named function');
}
Name()
//! 2. Anonymous function
// * A function not having a name is called anonymous function
// function (){
//     console.log('My name is Anonymous function');
// }
//! 3. Function expression 
// * Assigning a function to a variable with the help of that variable we can call that function
const x = function (){
    console.log('My name is Function expression');
}
x()
const lulli = function lilly(){
    console.log('My name is lilly');
}
lulli()
//! 4. Nested function
//* Function inside another function 
console.log('----- Nested function');

function parent() {
    console.log('Parent function'); 
    function child() {
        console.log('Child function');  
    }
    child()
} 
parent()
//! 5.Javascript Curring
// * Its a technique in which we call a function along with the parent  function
console.log('-----Javascript Curring')
function parent() {
    console.log('Parent function'); 
    function child() {
        console.log('Child function');  
    }
    return child
} 
parent()()
//! 6.Arrow function
console.log('-----Arrow function');

const demo = (a)=>{
    console.log(a)
}
demo(20)
//* No need function keyword
//* In  function we need to use explicit return. It supports implicit return.
const greet = ()=>'feeling happy'
console.log(greet());
const res = (a,b)=>a+b
console.log(res(20,30));
//! 7.IIFE (Imediately Invoking Function Expression)
console.log('-------Imediately Invoking Function Expression');
(function demo() {
    console.log('IIFE');
    
})()
//* To execute a task once

//! 8.HOF [Higher Order Function]
//* A function accept another function as an argument we called as hof to the acceptinng  function.
console.log('----------------HOF')
const add = (a,b)=>{
    return a+b
}
const sub = (a,b)=>{
    return a-b
}
const Calculate = (x,y,Task)=>{
    const res = Task(x,y)
    console.log(res);
    
}
Calculate(10,20,add)
Calculate(40,20,sub)
Calculate(40,20,(a,b)=>a+b)
Calculate(40,20,(a,b)=>a-b)
