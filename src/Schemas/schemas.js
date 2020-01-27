const Joi = require('@hapi/joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().max(30),
});

const putSchema = Joi.object({
  id: Joi.string().guid().required(),
});

const deleteSchema = Joi.object({
  id: Joi.string().guid().required(),
});

module.exports = {postSchema, putSchema, deleteSchema};
