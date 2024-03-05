import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book, BookCopy, Checkout, Hold, Library, User } from "./entity";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "sarahperrone",
	password: "",
	database: "libroLink",
	synchronize: true,
	dropSchema: true,
	logging: false,
	entities: [Book, BookCopy, Checkout, Hold, Library, User],
	migrations: [],
	subscribers: [],
});
