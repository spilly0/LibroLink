import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@Entity()
export class Hold {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => Book)
	@JoinColumn()
	book: Book;

	@OneToOne(() => User)
	@JoinColumn()
	user: User;

	@Column({ type: "timestamp with time zone", nullable: true })
	requestDate: string;

	@Column({ type: "timestamp with time zone", nullable: true })
	checkoutDate: string;

	@Column({ type: "timestamp with time zone", nullable: true })
	expirationDate: string;

	constructor(data?: Partial<Hold>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
