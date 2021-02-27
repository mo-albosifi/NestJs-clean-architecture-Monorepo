
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@nartc/automapper';

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    @AutoMap()
    id?: number
    
    @Column()
    @AutoMap()
    name: string

    @Column({ default: true })
    @AutoMap()
    isActive: boolean;
}