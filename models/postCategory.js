module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      timestamps: false, tableName: 'PostsCategories' },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { as: 'post', through: PostCategory, foreignKey: 'categoryId' });

    models.BlogPost.belongsToMany(models.Category,
      { as: 'categories', through: PostCategory, foreignKey: 'postId' });
  };

  return PostCategory;
};
