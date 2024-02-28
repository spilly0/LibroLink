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
	isbn: number;

	@Column()
	genre: string;

	@Column({ type: "bigint" })
	publicationDate: number;
}
