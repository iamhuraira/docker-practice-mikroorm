// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {
  @Property({ autoincrement: true, primary: true })
  id!: number;

  @Property({ fieldName: 'firstName' })
  firstName!: string;

  @Property({ fieldName: 'lastName' })
  lastName!: string;

  @Property()
  age!: number;
}
