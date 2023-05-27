//validation
const Joi = require("joi");
//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().email().required().min(6),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().email().required().min(6),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
