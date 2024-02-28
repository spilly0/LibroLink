import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book, BookCopy, Checkout, Library, User } from "./entity";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "sarahperrone",
	password: "",
	database: "libroLink",
	synchronize: true,
	logging: false,
	entities: [Book, BookCopy, Checkout, Library, User],
	migrations: [],
	subscribers: [],
});
