const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const _ = require('lodash');
const server = http.createServer((req , res)=>{
    //lodash  ---

    const num = _.random(0,20);
    console.log(num);
    const greet = _.once(()=>{
        console.log('hello');
        console.log('hii pratik');
        console.log('why commit not comming');
        console.log('done');
    });
    greet();
    greet();
    mongodb+srv;//<username>:<password>@cluster0.ratcr61.mongodb.net/?retryWrites=true&w=majority
    //console.log(req.url , req.method);

    //giving response
    res.setHeader('Content-Type' , 'text/html');
    // res.write('<p>hello ,pratik</p>');
    // res.write('<p>hello ,pratik</p>');

    // res.end();

    //routing multiple req
    //*******all this could be simply done using express */
    let path = './';
    switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about' :
            path+='about.html';
            break;
        default:
            path+='404.html';
            break;
    }
    // send an html file
    // *********************************** */
    fs.readFile(path , (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data); //if writing once write in end
        }
    })

    //********************* */

});

server.listen(3000 , 'localhost' ,()=>{
    console.log('listenig for reqest for port 3000');
})