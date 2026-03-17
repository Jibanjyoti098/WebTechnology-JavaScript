var python = Number(prompt("Enter mark: "))
var dsa = Number(prompt("Enter mark: "))
var database = Number(prompt("Enter mark: "))
var webtech = Number(prompt("Enter mark: "))
var total = python+dsa+database+webtech
var per = (total/400)*100
// console.log(per);
if (per<35) {
    document.writeln('<audio src="../Concepts/faa.mp4" autoplay ></audio>')
} 
else if(90<=per<=100){
    document.writeln("Keep it up buddy")
}
else if(80<=per<=90){
    document.writeln("A1")
}
else {
    
}
