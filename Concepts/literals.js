//& Literals 
//* Datatypes:
//~ 1. Primitive
//! a.String
    var x = 'sundari'
    var y = 'leela'
    var z = `
        Maala
        is 
        lavan sir's
        wifuuuu
    `
    console.log(x,y,z);
    
    console.log(typeof x);
    console.log(typeof y);
    console.log(typeof z);
    
//! b.Number
    var a = 10.23326546842
    console.log(typeof a);
    
//! c.Boolean (true || false)
    var x = true
    console.log(typeof x);
 //! d.undefined
    var u;
    console.log(u);

//! e.null
    var x = null
    console.log(typeof x);
    //* Object based that's why object it is. Parent of null is object.
    
//! f.BigInt
var n = 123456789123245999n
console.log(typeof n)
//! g.Symbol
var symbol = Symbol()
console.log(symbol)
//~ 2. Non-primitive datatypes
//! a.Array
var userdetails = ['risi', 23, 'male', null, ['me', 'and me', 'only me']]
console.log(userdetails)
console.log(userdetails[4])
//* array len is dynamic in nature
//*  we can add heterogeneous values in an arrayin '[]' sep by ','
//! b.Object
//* We store data in key value pair
var details = {
    username: 'risi',
    age: 21,
    gender: 'male',
    friend: ['me', 'and me', 'only me'],
    add: {
        city:'bbsr',
        pin: 751001
    }
} 
console.log(details)
console.log(details.age)
console.table(details);
console.error('error')
console.warn("Warning ")
console.log(details.add.city)

//&  Adding elements in arr and obj 
var obj = {}
    obj.username = 'Anybody',
    obj.age = 21
    console.log(obj);
    obj.username = 'Nobody'
    console.log(obj);

var arr = []
arr[0] = 'risi'
arr[1] = 'don'
console.log(arr);
arr[1] = null
console.log(arr);

//& string 
var str = 'abc'
str[0] = 'z'
console.log(str);

//& Diff bet primitive and Non-primitive 
//& Primitive
//* 1.single valued
//* 2.Immutable
//* 3.Value based
//& Non-Primitive
//* 1.multi valued
//* 2.mutable
//* 3.reference based
var arr = ['a', 'b']
var arr2 = arr
console.log(arr2);
arr2[0] = 'z'
console.log(arr);
console.log(arr2);

//! c.regex [regular expression]
