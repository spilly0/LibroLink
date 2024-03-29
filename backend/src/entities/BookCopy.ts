import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { Book } from "./Book";
import { Library } from "./Library";

type StatusRoles = "available" | "checked" | "hold";

@Entity()
export class BookCopy {
	@PrimaryGeneratedColumn()
	id: number;

	// Book
	@ManyToOne(() => Book)
	@JoinColumn()
	copy: Book;

	// Location of the book
	@OneToOne(() => Library)
	@JoinColumn()
	location: Library;

	@Column()
	status: StatusRoles;

	constructor(data?: Partial<BookCopy>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
