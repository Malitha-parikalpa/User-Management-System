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

app.use(express.json());  //req and res convert to json obj or json array (data communicate)

app.get('/users',(req,res) =>{
   controller.getUsers((req,res,next) =>{
    res.send();
   });

})

app.post('/createuser', (req,res) => {
    controller.addUser(req.body,(callback)=>{
        res.send();
    });
});

app.put('/updateusers', (req,res) => {
    controller.updateUser(req.body,(callback)=>{
        res.send(callback);
    });
});

app.delete('/deleteuser', (req,res) => {
    controller.deleteUser(req.body,(callback)=>{
        res.send(callback);
    });
});

module.exports = app;

