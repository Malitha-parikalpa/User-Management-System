const user = require('.model');

//create
const getUsers = (req,res,next) => {
    User.find()
        .then(response =>{
            res.json({response})
        })
        .catch(error => {
            res.json({ message: error})
        })
};
 


exports.getUsers = getUsers;
exports.getUserById = getUserById;
