import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { Book } from "./Book";
import { Library } from "./Library";

@Entity()
export class BookCopy {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => Book)
	@JoinColumn()
	copy: Book;

	@OneToOne(() => Library)
	@JoinColumn()
	location: Library;
}
