const express = require("express");

const fs = require('fs');

const v = require('./verif');


const app = express();

const PORT = 5050 ; 

app.get('/',v, (req,res) =>{
    fs.readFile('./Homepage.html', 'utf8',(err,data)=>{
        err?res.end('File not found') && console.error(err) :res.end(data);
    });
});

app.get('/Contactus.html',v, (req,res) =>{
    fs.readFile('./Contactus.html', 'utf8',(err,data)=>{
        err?res.end('File not found') && console.error(err) :res.end(data);
    });
});

app.get('/Ourservice.html',v, (req,res) =>{
    fs.readFile('./Ourservice.html', 'utf8',(err,data)=>{
        err?res.end('File not found') && console.error(err) :res.end(data);
    });
});


app.listen(PORT,(req,res) => {
    console.log(`server is running on port : ${PORT}`);

});