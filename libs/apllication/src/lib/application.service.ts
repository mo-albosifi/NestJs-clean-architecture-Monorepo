import { BookDto } from './DTOs/BookDto';
import { IBookRepo } from './Reposetories/IBookRepo';
import { DomainService } from './../../../domain/src/lib/domain.service';
import { Inject, Injectable } from '@nestjs/common';
import { Book } from 'libs/domain/src/lib/Entities/Book.entity';

@Injectable()
export class ApplicationService {
    constructor(
        private readonly domainService: DomainService,
        @Inject('IBookRepo') private readonly bookRepo: IBookRepo
    ) {}

//     const vm = Mapper.map(user, UserVm);
// /**
//  * UserVm { firstName: 'Chau', lastName: 'Tran', age: 28, bio: 'Developer' }
//  */
// // Pseudo code to get a list of Users
// const users = this.db.User.findAll();
// const vms = Mapper.mapArray(users, UserVm);

    getAllBook = () : Promise<Book[]>=> this.bookRepo.getAllBook();

    getBookById = (id:number) : Promise<Book> => this.bookRepo.getBookById(id);

    addBook = (book:BookDto ) => this.bookRepo.addBook(book);

    editBook = (book:Book , id:number) => this.bookRepo.editBook(book ,id);
}