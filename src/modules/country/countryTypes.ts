/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { Country, Prisma } from "@prisma/client";

export interface ICountryService {
	registerCountry({ name, capital }: Omit<Country, "id">): Promise<Country>;
	getCountries(states: boolean): Promise<Country[]>;
}

export interface ICountryRepository {
	insertCountry(country: Prisma.CountryCreateInput): Promise<Country>;
	getCountries(states: boolean): Promise<(Country & {})[]>;
}

export interface ICreateCountryValidation {
	capital: string;
}
