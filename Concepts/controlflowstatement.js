//! break
for (let i = 1; i <= 5; i++) {
    if (i==3) {
        console.log(i);
        break
    }
    console.log(i);
}
//! continue
for (let i = 1; i <= 5; i++) {
    if (i==3) {
        continue
    }
    console.log(i);
}
//! return
function demo() {
    let a = 10
    let b = 40
    return a+b
    console.log('After return keyword nothing will work');
}
const res = demo()
console.log(res);
