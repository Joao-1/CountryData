import Express from "express";
import { Server } from "http";
import "../prisma/prismaClient";
import routes from "./routes";

export default class App {
	express: Express.Application;

	constructor() {
		this.express = Express();
		this.middlewares();
		this.routes();
	}

	open(port: number, server?: Server) {
		// eslint-disable-next-line no-console
		console.log("App opening");
		if (server) return server.listen(port);
		return this.express.listen(port);
	}

	close(server: Server) {
		// eslint-disable-next-line no-console
		console.log("App closing");
		return server.close();
	}

	private middlewares() {
		this.express.use(Express.urlencoded({ extended: false }));
		this.express.use(Express.json());
	}

	private routes() {
		this.express.use(routes);
	}
}
