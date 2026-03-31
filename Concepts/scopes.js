//~ Scopes in js
//* Visibility of scope

//& Types of scopes

//! 1. Global scope
console.log('Global  scope')
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);
if (true) {
  console.log(a);
  console.log(b);
  console.log(c);
}

//! 2. Block scope
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log('Block scoped');

console.log(a);
console.log(b);
console.log(c);
//! 3. Function Level scope
function demo() {
    var a = 10
    let b = 20
    const c = 30
    console.log('Function level scope');
    console.log(a);
    console.log(b);
    console.log(c);
}
demo()
//! 4. Lexical scope
//* The scope through which child function can access data from parent functions.
function parent() {
    let money = 2000
    console.log('Lexical scope');
    // console.log(snacks);
    function child() {
        // let snacks = 'chips'
        console.log(money);
    }
    child()
}
parent()
