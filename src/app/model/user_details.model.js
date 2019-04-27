module.exports = (sequelize, Sequelize) => {
    const User_details = sequelize.define('user_details', {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
  
        user_id: {
          type: Sequelize.INTEGER,
          foreignKey: true
          },
  
        address: {
        type: Sequelize.STRING
        },
  
        city: {
        type: Sequelize.STRING
        },
  
        country: {
          type: Sequelize.STRING
          },
  
        profile_pic:{
          type: Sequelize.STRING
        }
  
      });
  
      return User_details;
  }
