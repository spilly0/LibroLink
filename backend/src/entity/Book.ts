import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	author: string;

	@Column()
	isbn: string;

	@Column()
	genre: string;

	// @Column({ type: "timestamp" })
	// publicationDate: number;

	constructor(data?: Partial<Book>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
