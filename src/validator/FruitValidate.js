const Joi = require("joi");

const validate = require("./validate");

const createFruit = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required()
});

exports.validateCreateFruit = validate(createFruit);
