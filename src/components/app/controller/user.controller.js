const db = require('f:/Rupa/UserRestAPI/project/src/components/app/config/db.config');
const Users = db.users;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  Users.create({  
    name: req.body.name,
    email_id: req.body.email_id
  }).then(users => {    
    // Send created user to client
    res.send(users);
  });
};
 

// FETCH all users
exports.findAll = (req, res) => {
  Users.findAll().then(users => {
    // Send all users to Client
    res.send(users);
  });
};
 
// Find a User by Id
exports.findById = (req, res) => {  
  Users.findById(req.params.id).then(users => {
    res.send(users);
  })
};
 

// Update a User
exports.update = (req, res) => {
  const id = req.params.id;
  Users.update( { name: req.body.name, email_id: req.body.email_id}, 
           { where: {id: req.params.id} }
           ).then(() => {
           res.status(200).send("updated successfully a user with id = " + id);
           });
};
 
// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Users.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};