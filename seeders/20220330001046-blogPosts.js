module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BlogPosts',
      [
        {
          id: 1,
          title: 'Desenvolvendo o programa de voo usado no projeto Apollo 11',
          content: 'Foguete não tem ré',
          userId: 1,
          published: new Date('1960-08-01T19:58:00.000Z'),
          updated: new Date('1960-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Pouso na lua com sucesso',
          content: 'Se o computador não tivesse reconhecido esse problema e se recuperado, duvido que a Apolo 11 tivesse pousado na lua com sucesso',
          userId: 1,
          published: new Date('1969-07-20T20:58:00.000Z'),
          updated: new Date('1969-07-20T20:58:51.000Z'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  },
};
