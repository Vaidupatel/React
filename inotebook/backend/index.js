const connectTomongo = require('./db');
const express = require('express');

connectTomongo().then(() =>{
    console.log("Connected to MongoDB");
});

const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('Wellcome to dark knight!');
});

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
});