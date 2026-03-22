const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('src/models/user', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('Model name is "User"', () => {
    checkModelName(User)('User');
  });

  describe('Check all properties exist', () => {
    ['displayName', 'email', 'password', 'image'].forEach(checkPropertyExists(user));
  });

});
