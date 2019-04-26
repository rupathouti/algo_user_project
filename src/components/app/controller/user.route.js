module.exports = function(app) {
 
    const users = require('f:/Rupa/UserRestAPI/project/src/components/app/controller/user.controller');
 
    // Create a new User
    app.post('/api/users', users.create);
 
    // Retrieve all user
    app.get('/api/users', users.findAll);
 
    // Retrieve a single users by Id
    app.get('/api/users/:id', users.findById);
 
    // Update a users with Id
    app.put('/api/users/:id', users.update);
 
    // Delete a users with Id
    app.delete('/api/users/:id', users.delete);
}