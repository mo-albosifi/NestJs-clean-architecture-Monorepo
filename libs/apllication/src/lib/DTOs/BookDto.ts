
import { AutoMap } from '@nartc/automapper';

export class BookDto{
    @AutoMap()
    id?: number

    @AutoMap()
    name: string
    
    @AutoMap()
    isActive: boolean;
}