import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Checkout {
	@PrimaryGeneratedColumn()
	id: number;
}
