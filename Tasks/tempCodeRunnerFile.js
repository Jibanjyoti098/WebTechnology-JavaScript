function Space(s, op){
    for (let i of s) {
        if(i==' '){
            op+='-'
        }
    }
    console.log(op);
    
}
Space('I am Ironman', '')