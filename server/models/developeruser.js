
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class developeruser extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static async associate(models) {
  
        // define association here
        {/** Je recupre les transaction faite par l'utilisateur */ }

      }
    };
    developeruser.init({
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      slugin: DataTypes.STRING,
      application_id: DataTypes.INTEGER.UNSIGNED,
      status_profile: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      avatar: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      indexes: [
        // Create a unique index on email
        {
          unique: true,
          fields: ['email']
        },
      ],
      sequelize,
      modelName: 'developeruser',
    });
  
    return developeruser;
  };