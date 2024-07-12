const user = require('.model');

//reyreave
const getUsers = (req,res,next) => {
    User.find()
        .then(response =>{
            res.json({response})
        })
        .catch(error => {
            res.json({ message: error})
        });
};
 
//create
const addUser = (req,res,next) => {
    const user = new User({
        id : req.body.id,
        name : req.body,name,
    });
    user.save()
        .then(response =>{
            res.json({response})
        })
        .catch(error => {
            res.json({ message: error})
        });
}



exports.getUsers = getUsers;
exports.getUserById = getUserById;
