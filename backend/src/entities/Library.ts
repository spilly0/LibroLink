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

	constructor(data?: Partial<Library>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
