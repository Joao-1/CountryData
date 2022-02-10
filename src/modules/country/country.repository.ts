/* eslint-disable no-console */
import { Prisma, PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICountryRepository } from "./countryTypes";

@injectable()
export default class CountryRepository implements ICountryRepository {
	// eslint-disable-next-line no-unused-vars
	constructor(@inject("PrismaClient") private prisma: PrismaClient) { }

	async insertCountry(country: Prisma.CountryCreateInput) {
		try {
			return this.prisma.country.create({ data: country });
		} catch (error) {
			// projeto só pra aprendizado, não vou me preocupar com tratamento de erro não
			console.log(error);
			throw new Error();
		}
	}

	async getCountries(states: boolean) {
		try {
			let includeStates: Prisma.CountryInclude;
			if (states) includeStates = { states: true };
			return this.prisma.country.findMany({ include: includeStates });
		} catch (error) {
			// projeto só pra aprendizado, não vou me preocupar com tratamento de erro não
			console.log(error);
			throw new Error();
		}
	}
}
