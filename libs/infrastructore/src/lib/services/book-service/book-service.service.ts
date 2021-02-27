import { BookDto } from './../../../../../apllication/src/lib/DTOs/BookDto';
import { IBookRepo } from './../../../../../apllication/src/lib/Reposetories/IBookRepo';
import { Injectable } from '@nestjs/common';
import { Book } from 'libs/domain/src/lib/Entities/Book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookServiceService  implements IBookRepo {
    constructor(@InjectRepository(Book)
    private bookRepository: Repository<Book>,) {}


    async getAllBook() : Promise<Book[]>{
        return await this.bookRepository.find()
    }
    async getBookById(id: number) : Promise<Book>{
        return await this.bookRepository.findOne(id)
    }
    async addBook(book: Book) : Promise<Book> {
        return await this.bookRepository.save(book)
    }
    async addBooks(books: Book[]): Promise<Book[]> {
        return await this.bookRepository.save(books)
    }
    async editBook(book: Book, id?: number)  : Promise<Book>{
        // let editBook = await this.bookRepository.findOne(id)
            // editBook =book
            if((await this.bookRepository.update(id,book)).affected > 0)
                return book
            return null
        
    }

    async create(user: BookDto): Promise<Book> {
        return await this.bookRepository.create(user);
    }
   
}