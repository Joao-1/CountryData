import { PrismaClient } from "@prisma/client";
import { container } from "tsyringe";

export default container.register<PrismaClient>("PrismaClient", {
	useValue: new PrismaClient(),
});
