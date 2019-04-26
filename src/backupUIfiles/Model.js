module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('users', {
      name: {
      type: Sequelize.STRING
      },
      email_id: {
      type: Sequelize.STRING
      }
      }
      );
    
    return users;
  }