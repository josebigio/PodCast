const express = require('express');
const app = express();
const path = require('path')
const indexPath = path.join(__dirname, '/index.html');
const bundle = path.join(__dirname, '/bundle.js');
const port = process.env.PORT || 8080;

app.get('/bundle.js',(req,res)=>{
    res.sendFile(bundle);
});
app.get('/',(req,res)=>{
    res.sendFile(indexPath);
});
app.listen(port);
