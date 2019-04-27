module.exports = function(app) {
 
    const user_details = require('./user_details.controller');
 
    // Create a new User
    app.post('/api/user_details', user_details.create);
 
    // Retrieve all user
    app.get('/api/user_details', user_details.findAll);
 
       // Update a users with Id
    app.put('/api/user_details/:id', user_details.update);
 
    // Delete a users with Id
    app.delete('/api/user_details/:id', user_details.delete);
}