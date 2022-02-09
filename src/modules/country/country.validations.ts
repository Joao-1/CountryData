import Joi from "joi";

const createCountryValidation = Joi.object({
	name: Joi.string().required(),
	capital: Joi.string().required(),
});

export default createCountryValidation;
