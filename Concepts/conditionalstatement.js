console.log('Conditional Statement');
//! 1. if 
if (10>5) {
    console.log('Hello');
    
}
//! 2. if-else 
if (100>20) {
    console.log('Hello');
} else {
    console.log('Bye bye');
    
}
//! 3. else-if 
var per = 90
if (per>=90) {
    console.log('Cond1 is true');
} 
else if(per>80){
    console.log('condition 2 is true');
}
else if(per>65){
    console.log('condition 3 is true');
}
else {
    console.log('fail');
    
}
//! 4. switch
// var value = prompt('Whats on your mind ?')
// switch (value) {
   
//     case 'rani':
//         console.log('Meri jaan tune mujhko pagal hi kiya mera lagda na jiya tere wager');
//         break;
//     case 'st':
//         console.log('Dhuk Dhuk');
//         break;
//     case 'risi':
//         console.log('Dil Tu Jaan Tu Dard v Dawa tu');
//         break;
//     case 'gorillah':
//         console.log('Khaneko diooo reeeeeeeeeeeeee');
//         break;

//     default:
//         console.log('Bewafa');
//         break;
// }
//! 5. ternary
// v = prompt("Enter her name")
// v?console.log('Loving you is a loosing game.')
// :console.log('No fear to loose the game');

//* tasks
var n1 = Number(prompt('Enter n1:'))
var n2 = Number(prompt('Enter n2:'))
var sum = n1+n2
// sum%2==0 ? document.writeln('<h1>We are friends</h1>') : document.writeln('<h1>We are enemies</h1>')
if (sum%2==0) {
    var res = confirm("Really u want to know it?")
    if (res) {
        document.writeln('<h1>We are friends</h1>')
    } else {
        document.writeln('<h1>Okay</h1>')
    }
}
else{
    var res = confirm('Dont angry on me.')
    if (res) {
        document.writeln('<h1>Enemies ahead</h1>')
    } else {
        document.writeln('<h1>So sweet mf</h1>')
    }
}