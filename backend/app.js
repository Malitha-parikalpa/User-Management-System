const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());     //block ek remove krn scn ekk

app.use(
    express.urlencoded({
        extended: true,
    })
);
//comment
app.use(express.json());  //req and res convert to json obj or json array (data communicate)

app.get('/users',(req,res) =>{
   controller.getUsers(users =>{
    res.send(users);
   });
//s
})

app.get('/users', (req,res) => {
    const id = req.query.id;
})

module.exports = app;

