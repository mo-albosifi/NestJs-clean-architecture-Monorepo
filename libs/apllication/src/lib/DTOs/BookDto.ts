
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class BookDto{
    id?: number
    
    name: string

    isActive: boolean;
}