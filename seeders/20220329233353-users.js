module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        displayName: 'Margaret Hamilton',
        email: 'margarethamilton@gmail.com',
        password: 'MIT@pollo1!1936',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Margaret_Hamilton_1995.jpg/475px-Margaret_Hamilton_1995.jpg',
      },
      {
        id: 2,
        displayName: 'Dorothy Vaughan',
        email: 'dorothyvaughan@gmail.com',
        password: 'N@S@boss1910',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Dorothy_Vaughan.jpg/291px-Dorothy_Vaughan.jpg',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
