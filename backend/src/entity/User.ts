import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRoles {
	ADMIN = "admin",
	MEMEBER = "member",
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

	@Column()
	phoneNumber: number;

	@Column({
		type: "enum",
		enum: UserRoles,
		default: UserRoles.MEMEBER,
	})
	role: UserRoles;

	constructor(data?: Partial<User>) {
		if (data) {
			Object.assign(this, data);
		}
	}
}
