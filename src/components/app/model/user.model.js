module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
      name: {
      type: Sequelize.STRING
      },
      email_id: {
      type: Sequelize.STRING
      }
    });
    
    return Users;
  

  const User_details = sequelize.define('user_details', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    name: {
    type: Sequelize.STRING
    },
    email_id: {
    type: Sequelize.STRING
    }
  });
  
  return User_details;
}
}