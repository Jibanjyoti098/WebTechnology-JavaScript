// !What  is a closure in js ?

//* A closure is a function that access to variables from its outer function scope, evne after the outer function has finished executing.

function parent() {
    let money = 2000
    function child() {
        console.log(money);
    }
    child()
}
parent()