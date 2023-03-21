const { FruitList } = require("../models");
const createError = require("../util/createError");
const { validateCreateFruit } = require("../validator/FruitValidate");
const { Op } = require("sequelize");

exports.getAllFruit = async (req, res, next) => {
  try {
    const fruitList = await FruitList.findAll();
    res.status(200).json({ fruitList });
  } catch (err) {
    next(err);
  }
};

exports.createFruitList = async (req, res, next) => {
  try {
    const value = validateCreateFruit({
      name: req.body.name,
      image: req.file?.path
    });
    console.log(value);
    const fruitList = await FruitList.create({
      name: value.name,
      image: value.image
    });
    res.status(201).json({ fruitList });
  } catch (err) {
    next(err);
  }
};

exports.getFruitListByName = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Make sure that the name parameter is not empty
    if (!name) {
      createError("Please provide a valid fruit name", 404);
    }

    const fruitList = await FruitList.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    });

    // If no fruits were found, send an error response
    if (!fruitList || fruitList.length === 0) {
      createError("Not have fruit in list", 404);
    }

    res.status(200).json(fruitList);
  } catch (err) {
    // Pass any errors to the error handling middleware
    next(err);
  }
};

exports.deleteFruitList = async (req, res, next) => {
  try {
    const fruitList = await FruitList.findOne({
      where: {
        id: req.params.fruitListId
      }
    });
    console.log(fruitList);
    await fruitList.destroy();
    res.status(200).json(fruitList);
  } catch (err) {
    next(err);
  }
};
