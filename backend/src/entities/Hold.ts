import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@Entity()
export class Hold {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Book)
	@JoinColumn()
	book: Book;

	@OneToOne(() => User)
	@JoinColumn()
	user: User;

	@Column({ type: "timestamp with time zone", nullable: true })
	requestDate: Date | null;

	@Column({ type: "timestamp with time zone", nullable: true })
	checkoutDate: Date;

	@Column({ type: "timestamp with time zone", nullable: true })
	expirationDate: Date;

	constructor(data?: Partial<Hold>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
