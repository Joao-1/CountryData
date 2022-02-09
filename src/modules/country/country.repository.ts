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
			console.log(error);
			throw new Error();
		}
	}
}
