import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Library {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	branchName: string;

	@Column()
	city: string;

	@Column()
	state: string;

	@Column()
	address: string;
}
