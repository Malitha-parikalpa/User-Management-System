const User = require('./model');

//retrieve user
const getUsers = (req,res,next) => {
    User.find()
        .then(response =>{
            res.json({response})
        })
        .catch(error => {
            res.json({ error})
        });
};
 
//create user 
const addUser = (req,res,next) => {
    const user = new User({
        id : req.body.id,
        name : req.body.name,
    });
    user.save()
        .then(response =>{
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}
//update User
const updateUser = (req,res,next) =>{
    const {id,name} = req.body; //obj destructuring  //get a value in id and name
    User.updateOne({id:id},{$set: {name:name}})
    .then(response =>{
        res.json({response})
    })
    .catch(error => {
        res.json({error})
    });
} 

//delete User
const deleteUser = (req,res,next) => {
    const id = req.body.id;
    User.deleteOne({id:id})
    .then(response =>{
        res.json({response})
    })
    .catch(error => {
        res.json({error})
    });
}



exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;