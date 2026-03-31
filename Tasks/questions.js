//! wap to find howmany even digits are present in a num
var n = 123
var s = String(n)
var c = 0
for(var i of s){
   if (Number(i)%2==0) {
     c+=1
   }
}
console.log(c, 'even digs')
//! wap to find howmany odd digits are present in a num
var n = 123
var s = String(n)
var c = 0
for(var i of s){
   if (Number(i)%2==1) {
     c+=1
   }
}
console.log(c, 'odd digs')
//! Square of a given num
n = 10
console.log(n*n);

//! sum of all digs
n = 10
sum = 0
for (let i = 1; i <= 10; i++) {
    sum+=i
}
console.log(n*(n+1)/2)
console.log(sum);
//! wap to sum all digs of a num witghout using type casting
var n = 123
s = 0
for (var i=1; i<=3;i++){
    var r = n%10
    console.log(r);
    s+=r
    n=Math.floor(n/10)
}
console.log(s)
//! Wap to check a given num is a number or not
n = 9
console.log(typeof n);
if (typeof n == 'number') {
  console.log('It  is a number')
}
