const db = require('../config/db.config');
const User_details = db.user_details;
 
// Post a Customer
exports.create = (req, res) => {  
  console.log(req);
  console.log(res);

  // Save to MySQL database
  User_details.create({  
    user_id: req.body.user_id,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    profile_pic: req.body.profile_pic
  }).then(user_details => {    
    // Send created user to client
    res.send(user_details);
  });
};
 

// FETCH all users
exports.findAll = (req, res) => {
    User_details.findAll().then(user_details => {
    // Send all users to Client
    res.send(user_details);
  });
};
 
// Find a User by Id
exports.findById = (req, res) => {  
    User_details.findById(req.params.id).then(user_details => {
    res.send(user_details);
  })
};
 

// Update a User
exports.update = (req, res) => {
  const id = req.params.id;
  User_details.update( { user_id: req.body.user_id,address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    profile_pic: req.body.profile_pic}, 
    { where: {id: req.params.id} }
    ).then(() => {
    res.status(200).send("updated successfully a user with id = " + id);
    });
};
 
// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  User_details.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};