 const express = require('express');
 const router = express.Router();
 const controller = require('./controller');

 //create routes
 router.get('/users',controller.getUsers);
 router.post('/createuser',controller.addUser);
 router.put('/updateusers',controller.updateUser);
 router.delete('/deleteuser',controller.deleteUser);
 
module.exports = router;

