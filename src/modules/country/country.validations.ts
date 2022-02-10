import Joi from "joi";

export const createCountryValidation = Joi.object({
	name: Joi.string().required(),
	capital: Joi.string().required(),
});

export const ReadCountryValidation = Joi.object({
	states: Joi.boolean().required(),
});
