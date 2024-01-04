const express = require('express');

//create express app

const app = express();
// register view engine -- to send dynamic html pages
//till now we had only send static pages
app.set('view engine' , 'ejs');
//creates a dir "views " in that have that ejs file

//listen to request
app.listen(3000);
//get request

app.get('/' , (req , res)=>{
    //res.send('<p> express home page</p>'); //automatically update sets the content type header
    //also updates status code
    //res.sendFile('./index.html' , {root :__dirname}); //it takes actual path full
    res.render('index'); //it will use ejs search engine render this file and send that
    
});

app.get('/about' , (req , res)=>{
    //res.send('<p> express about page</p>'); //automatically update sets the content type header
    //also updates status code
    res.sendFile('./about.html' , {root :__dirname});
});

app.get('/404' , (req , res)=>{
    res.sendFile('./404.html' , {root : __dirname});
    //sendfile takes the absolute path of the file
});

//redirecting from one path to other file
app.get('/about-us' , (req, res)=>{
    res.redirect('/about');
})

//if goes to wrong url -- should be written in last
//otherwise it will catch with that --coz this is general method
app.use((req,res)=>{
    res.sendFile('./404.html',{root : __dirname});
});

