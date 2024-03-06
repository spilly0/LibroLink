import { AppDataSource } from "./data-source";
import { Book, BookCopy, Hold, User } from "./entities";

AppDataSource.initialize()
	.then(async () => {
		console.log("Inserting a new book into the database...");
		const book1 = new Book({
			title: "A Court of Thrones and Roses",
			author: "Sarah Maas",
			isbn: "1619635186",
			genre: "fantasy",
			// publicationDate: new Date("2016-05-03"),
		});

		const book2 = new Book({
			title: "A Court of Mist and Fury",
			author: "Sarah Maas",
			isbn: "1635575583",
			genre: "fantasy",
			// publicationDate: new Date("2016-05-03"),
		});
		const bookCopy1 = new BookCopy({
			copy: book1,
			status: "available",
		});

		const bookCopy2 = new BookCopy({
			copy: book1,
			status: "available",
		});
		const patron = new User({
			firstName: "Sally",
			lastName: "Smith",
			email: "sallysmith@gmail.com",
			phoneNumber: "1115552222",
		});

		// patron has a book on hold
		const hold1 = new Hold({
			book: book1,
			user: patron,
			requestDate: new Date(),
		});
		await AppDataSource.manager.save([
			book1,
			bookCopy1,
			bookCopy2,
			patron,
			hold1,
		]);
	})
	.catch((error) => console.log(error));
