import { Country } from "@prisma/client";
import { injectable } from "tsyringe";
import CountryRepository from "./country.repository";
import { ICountryService } from "./countryTypes";

@injectable()
export default class CountryService implements ICountryService {
	// eslint-disable-next-line no-unused-vars
	constructor(private countryRepository: CountryRepository) { }

	async registerCountry({ name, capital }: Omit<Country, "id">) {
		return this.countryRepository.insertCountry({ name, capital });
	}

	async getCountries(states: boolean) {
		return this.countryRepository.getCountries(states);
	}
}
