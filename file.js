const fs = require('fs');

//readfile - asynchronous
fs.readFile('./bb.txt',(err , data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
console.log('above func is asynchronous that y called this then the func');
//writefile

