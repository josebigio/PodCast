const express = require('express');
const app = express();
const path = require('path')
const indexPath = path.join(__dirname, '/index.html');
console.log('indexpath',indexPath);
const bundle = path.join(__dirname, '/bundle.js');
console.log('bundle',bundle);
const port = process.env.PORT || 8080;
console.log('port',port);

app.get('/bundle.js',(req,res)=>{
    console.log('get /bundle.js',req);
    res.sendFile(bundle);
});
app.get('/',(req,res)=>{
    console.log('get /',req);
    res.sendFile(indexPath);
});
app.listen(port);
