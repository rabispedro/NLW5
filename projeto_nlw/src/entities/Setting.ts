import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Timestamp } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("settings")
class Setting{
	@PrimaryColumn()
	id: String;

	@Column()
	username: String;
	
	@Column()
	chat: Boolean;
	
	@UpdateDateColumn()
	update_at: Date;

	@UpdateDateColumn()
	created_at: Date;

	constructor(){
		if(!(this.id)){
			this.id = uuid();
		}
	};
};

export {Setting};
