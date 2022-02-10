import { Request, Response } from "express";
import { injectable } from "tsyringe";
import CountryService from "./country.service";

@injectable()
export default class CountryController {
	// eslint-disable-next-line no-unused-vars
	constructor(private countryService: CountryService) { }

	async create(req: Request, res: Response) {
		const { name, capital } = req.body;
		const newCountry = await this.countryService.registerCountry({ name, capital });
		res.status(201).json({ status: "success", country: newCountry });
	}

	async read(req: Request, res: Response) {
		const { states } = req.query;
		const countries = await this.countryService.getCountries(states as unknown as boolean);
		res.status(200).json({ status: "success", countries });
	}
}
