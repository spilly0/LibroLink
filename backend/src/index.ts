import { AppDataSource } from "./data-source";
import { Book, BookCopy, User } from "./entity";

AppDataSource.initialize()
	.then(async () => {
		console.log("Inserting a new book into the database...");
		const book = new Book();
		book.title = "A Court of Thrones and Roses";
		book.author = "Sarah Maas";
		book.isbn = 1619635186;
		book.genre = "fantasy";
		book.publicationDate = Math.round(+new Date("2016-05-03") / 1000);
		const bookCopy = new BookCopy();
		bookCopy.copy = book;
		await AppDataSource.manager.save([book, bookCopy]);
	})
	.catch((error) => console.log(error));
