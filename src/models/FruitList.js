module.exports = (sequelize, DataTypes) => {
  const FruitList = sequelize.define(
    "FruitList",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      }
    },
    {
      underscored: true
    }
  );
  return FruitList;
};
