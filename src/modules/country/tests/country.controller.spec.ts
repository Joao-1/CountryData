/* eslint-disable no-undef */
import "reflect-metadata";
import request from "supertest";
import App from "../../../app";

jest.mock("../country.repository", () => {
	return jest.fn().mockImplementation(() => {
		return {
			insertCountry: jest.fn().mockResolvedValue({ name: "Brasil", capital: "Brasília" }),
		};
	});
});

describe("CountryController ", () => {
	describe("Register", () => {
		it("should return a new country register with status code 201", async () => {
			const country = await request(new App().express)
				.post("/country")
				.send({ name: "Brasil", capital: "Brasília" });

			expect(country.body.status).toBe("success");
		});
	});
});
