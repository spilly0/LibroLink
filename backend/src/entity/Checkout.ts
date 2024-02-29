import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { BookCopy } from "./BookCopy";
import { User } from "./User";

@Entity()
export class Checkout {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => BookCopy)
	@JoinColumn()
	copy: BookCopy;

	@OneToOne(() => User)
	@JoinColumn()
	user: User;

	@Column({ type: "timestamp with time zone" })
	checkoutDate: string;

	@Column({ type: "timestamp with time zone" })
	dueDate: string;

	@Column()
	extensions: number;
}
