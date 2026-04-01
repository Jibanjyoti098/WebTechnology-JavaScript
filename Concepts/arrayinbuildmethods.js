var arr = ['risi', 'chintu', 'airy', 'kisa', 'rajesh', 'donu']

// arr.push('chandan')
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift('gyana')
// console.log(arr);

// arr.shift()
// console.log(arr);

// console.log(arr.length);

// console.log(arr.at(1));

// console.log(arr.includes('chintu'));

// console.log(arr.indexOf('gyana'));

// console.log(arr.lastIndexOf('risi'));

// console.log(arr.slice(0,3));

// console.log(arr);

arr.splice(3,2)
console.log(arr);



//! map function 
//* Map is an array method it'll take each value and return a value

// var arr = ['risi', 'chintu', 'anaconda', 'python', 'crocodile']

// const  m = arr.map((v,i,a)=>{
//     return v
// })
// console.log(m);

//! forEach
//* Foreach will take each value and does not return a value

// const fe = arr.forEach((v,i,a)=>{
//     return v
// })
// console.log(fe);

//! filter function 
//* filter is an array method it'll take each value and return a value based on some condition

// nm = [1,2,3,4,5,6,7,8,9]
// const  f = nm.filter((v,i,a)=>{
//     return v>5
// })
// console.log(f);