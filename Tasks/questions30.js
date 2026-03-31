//! wap to replace a vowel char in a given string with 0
function replaceVowel(s, op) {
    for(let i of s){
        if(i.toLowerCase()=='a' || i.toLowerCase()=='e' || i.toLowerCase()=='i' || i.toLowerCase()=='o' || i.toLowerCase()=='u'){
            op+='0'
        }
        else{
            op+=i
        }
    }
    console.log(op);  
}
replaceVowel('Rishi', '')

//! wap to replace space with -
function Space(s, op){
    for (let i of s) {
        if(i==' '){
            op+='-'
        }else{
            op+=i
        }
    }
    console.log(op);
}
Space('I am Ironman', '')

//! Wap to capitalize first char of a given string
function Capitalize(s,op) {
    for (let i = 0; i < s.length; i++) {
        if (i==0){
            op+=String.fromCharCode(s.charCodeAt(0)-32)
        }else{
            op+=s[i]
        }
    }
    console.log(op);
}
Capitalize('wa kya ladka he','')

//! Wap to remove digits from a given string
function remDig(s, op) {
    for (let i=0; i<s.length;i++) {
       if (Number(s[i])||Number(s[i])==0) {
        op+=''
       }else{
        op+=s[i]
       }
    }
    console.log(op);
}
remDig('rishi@098', '')