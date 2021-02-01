import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Cep {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: string;

    @Column()
    address: string;

}