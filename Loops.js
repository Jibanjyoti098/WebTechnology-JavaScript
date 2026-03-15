// !Loops
// & To execute a set of code again and again untill condition is false
//* 1. for loop (Entry  control  Loop)
// {} - obj notation 
// [] - arr notation

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

//* 5. for-in loop
