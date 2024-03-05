import { AppDataSource } from "./data-source";
import { Book, BookCopy, User } from "./entity";

AppDataSource.initialize()
	.then(async () => {
		console.log("Inserting a new book into the database...");
		const book = new Book({
			title: "A Court of Thrones and Roses",
			author: "Sarah Maas",
			isbn: "1619635186",
			genre: "fantasy",
			// publicationDate: new Date("2016-05-03"),
		});
		const bookCopy = new BookCopy({
			copy: book,
			status: "available",
		});
		await AppDataSource.manager.save([book, bookCopy]);
	})
	.catch((error) => console.log(error));
