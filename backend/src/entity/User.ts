import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRoles {
	ADMIN = "admin",
	MEMBER = "member",
}

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ unique: true })
	email: string;

	@Column({ length: 10 })
	phoneNumber: string;

	@Column({
		type: "enum",
		enum: UserRoles,
		default: UserRoles.MEMBER,
	})
	role: UserRoles;

	constructor(data?: Partial<User>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
