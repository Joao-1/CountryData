import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import { container } from "tsyringe";
import CountryController from "../modules/country/country.controller";
import { createCountryValidation, ReadCountryValidation } from "../modules/country/country.validations";

const country = Router();

const countryController = container.resolve(CountryController);

country.post("/country", celebrate({ [Segments.BODY]: createCountryValidation }), (req, res, next) => {
	countryController.create(req, res);
});

country.get("/country", celebrate({ [Segments.QUERY]: ReadCountryValidation }), (req, res, next) => {
	countryController.read(req, res);
});

export default country;
